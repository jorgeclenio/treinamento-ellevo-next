import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { Subscription } from "rxjs";

import { TaskService } from "./../../../../../shared/services/task.service";
import { SnackbarService } from "./../../../../../shared/services/snackbar.service";
import { Status } from "src/app/modules/shared";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.scss"],
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public taskDetailsId: string;
  public statusEnum = Status;

  constructor(
    public dialogRef: MatDialogRef<TaskDetailsComponent>,
    public taskService: TaskService,
    private fb: FormBuilder,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showTaskData();
    this.closeDialogWithEscapeButton();
  }

  // FUNCTION TO GENERATE FORM
  public generateForm() {
    this.form = this.fb.group({
      generator: [{ value: "", disabled: true }],
      title: [{ value: "", disabled: true }],
      description: [{ value: "", disabled: true }],
      status: [{ value: "", disabled: true }],
      responsible: [{ value: "", disabled: true }],
    });
  }

  // FUNCTION TO SHOW TASK DATA
  public showTaskData() {
    this.subscription.push(
      this.taskService.getTaskById(this.taskDetailsId).subscribe(
        (taskData) => {
          this.form.get("generator").setValue(taskData.generator.name);
          this.form.get("title").setValue(taskData.title);
          this.form.get("description").setValue(taskData.description);
          this.form.get("status").setValue(taskData.status);
          this.form.get("responsible").setValue(taskData.responsible.name);
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "Unable to fetch the requested information."
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
