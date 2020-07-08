import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { ModalComponent } from "src/app/modal/modal.component";

@Component({
  selector: "app-results-page",
  templateUrl: "./results-page.component.html",
  styleUrls: ["./results-page.component.scss"],
})
export class ResultsPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const dialogRef = this.dialog.open(ModalComponent);
  }
  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
