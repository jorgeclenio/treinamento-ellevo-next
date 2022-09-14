import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Subscriber } from "rxjs";
import { SnackbarService, TaskService } from "src/app/modules/shared/services";
import { faBan, faCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task-delete",
  templateUrl: "./task-delete.component.html",
  styleUrls: ["./task-delete.component.scss"],
})
export class TaskDeleteComponent implements OnInit {
  public form: FormGroup;
  public taskDeleteId: string;
  private subscriptions = new Subscriber();
  public faBan = faBan;
  public faCheck = faCheck;

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
        this.cdr.detectChanges();
      })
    );
  }

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
