import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Subscriber } from "rxjs";

import { SnackbarService, TaskService } from "src/app/modules/shared/services";

@Component({
  selector: "app-task-delete",
  templateUrl: "./task-delete.component.html",
  styleUrls: ["./task-delete.component.scss"],
})
export class TaskDeleteComponent implements OnInit {
  public form: FormGroup;
  public taskDeleteId: string;
  private subscriptions = new Subscriber();

  constructor(
    public dialogRef: MatDialogRef<TaskDeleteComponent>,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private taskService: TaskService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.closeDialogWithEscapeButton();
    this.initiateSubscriptions();
  }

  private initiateSubscriptions(): void {
    this.subscriptions.add(
      this.form.get("Checkbox").valueChanges.subscribe((value) => {
        // console.log(this.form);
        this.cdr.detectChanges();
      })
    );
  }

  // FUNCTION TO GENERATE FORM
  public generateForm() {
    this.form = this.fb.group({
      Checkbox: [false, [Validators.required]],
    });
  }

  public deleteTask() {
    this.subscriptions.add(
      this.taskService.deleteTask(this.taskDeleteId).subscribe(
        (returnTaskDeleted) => {
          this.snackbar.showSnackbarSuccess("Task deleted successfully.");
          this.dialogRef.close();
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "Task cannot be deleted."
          );
          this.dialogRef.close();
        }
      )
    );
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
}
