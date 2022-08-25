import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { Task } from "./../../../../models/task.model";

@Component({
  selector: "app-task-update",
  templateUrl: "./task-update.component.html",
  styleUrls: ["./task-update.component.scss"],
})
export class TaskUpdateComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TaskUpdateComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.generateForm();
  }

  public generateForm() {
    this.form = this.fb.group({
      Generator: [""],
      Title: [""],
      Description: [""],
      Status: [""],
      Responsible: [""],
      Activity: [""],
    });
  }

  public updateTask() {
    console.log("update task");
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
