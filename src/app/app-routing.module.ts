import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import(`../app/dashboard/dashboard.module`).then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: "results",
    loadChildren: () =>
      import("../app/results/results.module").then((m) => m.ResultsModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import(`../app/dashboard/dashboard.module`).then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
