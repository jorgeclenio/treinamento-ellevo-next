import { Status } from "src/app/modules/shared/enums/status.enum";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

import { TaskService } from "./../../../../../shared/services/task.service";
import { SnackbarService } from "src/app/modules/shared/services/snackbar.service";

import { AddTask } from "./../../../../models/addTask.model";

@Component({
  selector: "app-task-create",
  templateUrl: "./task-create.component.html",
  styleUrls: ["./task-create.component.scss"],
})
export class TaskCreateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public statusEnum = Status;

  constructor(
    public dialogRef: MatDialogRef<TaskCreateComponent>,
    public taskService: TaskService,
    private fb: FormBuilder,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.closeDialogWithEscapeButton();
  }

  // FUNCTION TO GENERATE FORM
  public generateForm() {
    this.form = this.fb.group({
      generatorId: [localStorage.getItem("userId")],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      status: [Status.NotStarted, [Validators.required]],
      responsibleId: [""],
    });
  }

  // FUCTION TO CREATE TASK
  public createTask() {
    if (!this.form.valid) {
      return;
    }
    const task: AddTask = this.form.value;
    this.subscription.push(
      this.taskService.postTask(task).subscribe(
        (returnTaskCreated) => {
          this.snackbar.showSnackbarSuccess("Task created successfully.");
          this.dialogRef.close();
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "Task cannot be created."
          );
          this.dialogRef.close();
        }
      )
    );
    return false;
  }

  // BUTTON CANCEL FOR CLOSE DIALOG
  public closeDialog() {
    this.dialogRef.close();
  }

  // CLOSE DIALOG WHEN ESC BUTTON IS PRESSED
  public closeDialogWithEscapeButton() {
    this.dialogRef.keydownEvents().subscribe((event) => {
      if (event.key === "Escape") {
        this.dialogRef.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((s) => s.unsubscribe());
  }
}
