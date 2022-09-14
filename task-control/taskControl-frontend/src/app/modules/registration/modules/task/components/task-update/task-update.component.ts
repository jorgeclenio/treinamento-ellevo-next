import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Subscription } from "rxjs";
import { SnackbarService, TaskService, UserService } from "./../../../../../shared/services";
import { Status } from "./../../../../../shared/enums/status.enum";
import { UpdateTask } from "./../../../../../registration/models/updateTask.model";
import { User, Task } from "./../../../../../registration/models";
import { AngularEditorConfig } from "@kolkov/angular-editor";

@Component({
  selector: "app-task-update",
  templateUrl: "./task-update.component.html",
  styleUrls: ["./task-update.component.scss"],
})
export class TaskUpdateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public users: User[] = [];
  public tasks: Task[] = [];
  public taskUpdateId: string;
  public statusEnum = Status;
  private generatorId: string;
  private responsibleId: string;
  public editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "auto",
    minHeight: "300",
    maxHeight: "auto",
    width: "auto",
    minWidth: "0",
    translate: "yes",
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: "",
    defaultFontName: "",
    defaultFontSize: "",
    fonts: [
      { class: "arial", name: "Arial" },
      { class: "times-new-roman", name: "Times New Roman" },
      { class: "calibri", name: "Calibri" },
    ],
    sanitize: true,
    toolbarPosition: "top",
    toolbarHiddenButtons: [["heading"], ["customClasses"]],
  };

  constructor(
    public dialogRef: MatDialogRef<TaskUpdateComponent>,
    private taskService: TaskService,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private cdr: ChangeDetectorRef,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showTaskData();
    this.getUserData();
    this.closeDialogWithEscapeButton();
  }

  public getUserData() {
    this.subscription.push(
      this.userService.getUsers().subscribe(
        (returnUser) => {
          this.users = returnUser;
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "Unable to fetch the requested information."
          );
        }
      )
    );
  }

  public generateForm() {
    this.form = this.fb.group({
      generator: ["", [Validators.required]],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      status: ["", [Validators.required]],
      responsibleId: [""],
    });
  }

  public showTaskData() {
    this.subscription.push(
      this.taskService.getTaskById(this.taskUpdateId).subscribe(
        (taskData) => {
          this.generatorId = taskData.generator.id;
          this.responsibleId = taskData.responsible.id;
          this.form.get("generator").setValue(taskData.generator.name);
          this.form.get("title").setValue(taskData.title);
          this.form.get("description").setValue(taskData.description);
          this.form.get("status").setValue(taskData.status);
          this.form.get("responsibleId").setValue(taskData.responsibleId);
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

  ngOnDestroy() {
    this.subscription.forEach((s) => s.unsubscribe());
  }
}
