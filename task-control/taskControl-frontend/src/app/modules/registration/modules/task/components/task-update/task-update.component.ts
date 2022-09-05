import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Subscription } from "rxjs";

import { Task } from "./../../../../models/task.model";

import { TaskService } from "./../../../../../shared/services/task.service";
import { SnackbarService } from "./../../../../../shared/services/snackbar.service";
import { Status } from "src/app/modules/shared";
import { UpdateTask } from "src/app/modules/registration/models";

@Component({
  selector: "app-task-update",
  templateUrl: "./task-update.component.html",
  styleUrls: ["./task-update.component.scss"],
})
export class TaskUpdateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public taskUpdateId: string;
  public statusEnum = Status;

  private generatorId: string;
  private responsibleId: string;

  constructor(
    public dialogRef: MatDialogRef<TaskUpdateComponent>,
    private taskService: TaskService,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showTaskData();
    this.closeDialogWithEscapeButton();
  }

  // FUNCTION TO GENERATE FORM
  public generateForm() {
    this.form = this.fb.group({
      generator: ["", [Validators.required]],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      status: ["", [Validators.required]],
      responsible: ["", [Validators.required]],
    });
  }

  // FUNCTION TO SHOW TASK DATA
  public showTaskData() {
    this.subscription.push(
      this.taskService.getTaskById(this.taskUpdateId).subscribe(
        (taskData) => {
          this.generatorId = taskData.generator.id
          this.responsibleId = taskData.responsible.id

          this.form.get("generator").setValue(taskData.generator.name);
          this.form.get("title").setValue(taskData.title);
          this.form.get("description").setValue(taskData.description);
          this.form.get("status").setValue(taskData.status);
          this.form.get("responsible").setValue(taskData.responsible.name);
          this.cdr.detectChanges();
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
  }

  // FUNCTION TO UPDATE TASK DATA
  public updateTask() {
    if (!this.form.valid) {
      return;
    }
    const task: UpdateTask = {
      description: this.form.get("description").value,
      status: parseInt(this.form.get("status").value),
      title: this.form.get("title").value,
      generatorId: this.generatorId,
      responsibleId: this.responsibleId,
    };
    this.subscription.push(
      this.taskService.updateTask(this.taskUpdateId, task).subscribe(
        (returnTaskUpdate) => {
          this.snackbar.showSnackbarSuccess("Task updated successfully.");
          this.dialogRef.close();
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "Could not update task."
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

  ngOnDestroy() {
    this.subscription.forEach((s) => s.unsubscribe());
  }
}
