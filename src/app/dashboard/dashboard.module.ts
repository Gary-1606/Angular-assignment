import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { SharedModule } from "../common/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
  ],
  declarations: [DashboardPageComponent],
})
export class DashboardModule {}
