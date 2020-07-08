import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalComponent } from "./modal/modal.component";
import { ResultsModule } from "./results/results.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { SharedModule } from "./common/shared/shared.module";
import { UserService, OnlyLoggedInUsersGuard } from "./guard/auth.guard";
@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ResultsModule,
    DashboardModule,
    SharedModule,
  ],
  entryComponents: [ModalComponent],
  providers: [UserService, OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
