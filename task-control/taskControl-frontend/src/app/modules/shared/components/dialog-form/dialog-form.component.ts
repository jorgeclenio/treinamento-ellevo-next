import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-dialog-form",
  templateUrl: "./dialog-form.component.html",
  styleUrls: ["./dialog-form.component.scss"],
})
export class DialogFormComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogFormComponent>) {}

  ngOnInit() {}

  cancel(): void {
    this.dialogRef.close();
  }
}
