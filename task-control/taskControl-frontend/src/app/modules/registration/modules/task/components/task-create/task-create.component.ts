import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

import { Task } from "./../../../../models/task.model";

@Component({
  selector: "app-task-create",
  templateUrl: "./task-create.component.html",
  styleUrls: ["./task-create.component.scss"],
})
export class TaskCreateComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TaskCreateComponent>,
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

  public createTask() {
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
