import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultsPageComponent } from "./results-page/results-page.component";
import { OnlyLoggedInUsersGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: ResultsPageComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule {}
