import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {}

  goToDashboardPage() {
    this.dialog.closeAll();
    this.router.navigate([""]);
  }
}
