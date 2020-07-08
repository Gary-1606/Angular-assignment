import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class UserService {
  isLoggedIn(): boolean {
    return false; // Switch to `false` to make OnlyLoggedInUsersGuard work
  }
}

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert(`You don't have permission to view this page. 
      Change the value returned by isLoggedIn() in auth.guard.ts as "true"
      `);
      this.router.navigate([""]);
      return false;
    }
  }
}
