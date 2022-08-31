import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { Task } from "./../../../../models/task.model";

@Component({
  selector: "app-task-update",
  templateUrl: "./task-update.component.html",
  styleUrls: ["./task-update.component.scss"],
})
export class TaskUpdateComponent implements OnInit {
  public form: FormGroup;
  public taskUpdateId: string;

  constructor(
    public dialogRef: MatDialogRef<TaskUpdateComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.generateForm();
    this.closeDialogWithEscapeButton();
  }

  public generateForm() {
    this.form = this.fb.group({
      Generator: ["", [Validators.required]],
      Title: ["", [Validators.required]],
      Description: ["", [Validators.required]],
      Status: ["", [Validators.required]],
      Responsible: ["", [Validators.required]],
      Activity: ["", [Validators.required]],
    });
  }

  public updateTask() {
    if (!this.form.valid) {
      return;
    }
    const task: Task = this.form.value;
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
