import { NgModule } from "@angular/core";
import { SharedComponent } from "./shared.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [SharedComponent],
  exports: [SharedComponent],
  imports: [MatCardModule],
})
export class SharedModule {}
