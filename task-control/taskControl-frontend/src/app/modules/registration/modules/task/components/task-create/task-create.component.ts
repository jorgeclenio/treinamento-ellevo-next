import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

import { Task } from "./../../../../models";

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
    console.log("create");
    if (!this.form.valid) {
      return;
    }
    const task: Task = this.form.value;
    console.log(task);
  }

  public closeDialog() {
    this.dialogRef.close();
    console.log("dialog closed");
  }
}
