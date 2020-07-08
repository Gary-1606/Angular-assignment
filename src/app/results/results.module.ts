import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

import { ResultsRoutingModule } from "./results-routing.module";
import { ResultsPageComponent } from "./results-page/results-page.component";

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [ResultsPageComponent]
})
export class ResultsModule {}
