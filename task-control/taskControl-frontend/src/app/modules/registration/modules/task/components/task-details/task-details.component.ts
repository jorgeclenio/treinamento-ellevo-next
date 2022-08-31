import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { Task } from "./../../../../models/task.model";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.scss"],
})
export class TaskDetailsComponent implements OnInit {
  public form: FormGroup;
  public taskDetailsId: string;

  constructor(
    public dialogRef: MatDialogRef<TaskDetailsComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.generateForm();
    this.closeDialogWithEscapeButton();
  }

  public generateForm() {
    this.form = this.fb.group({
      Generator: [{ value: "", disabled: true }],
      Title: [{ value: "", disabled: true }],
      Description: [{ value: "", disabled: true }],
      Status: [{ value: "", disabled: true }],
      Responsible: [{ value: "", disabled: true }],
      Activity: [{ value: "", disabled: true }],
    });
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public closeDialogWithEscapeButton() {
    this.dialogRef.keydownEvents().subscribe((event) => {
      if (event.key === "Escape") {
        this.dialogRef.close();
      }
    });
  }
}
