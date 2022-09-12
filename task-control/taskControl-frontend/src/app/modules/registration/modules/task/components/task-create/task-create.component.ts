import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import {
  TaskService,
  SnackbarService,
  UserService,
} from "./../../../../../shared/services";
import { AddTask } from "./../../../../models/addTask.model";
import { Status } from "./../../../../../shared/enums/status.enum";
import { User } from "./../../../../../registration/models";
import { AngularEditorConfig } from "@kolkov/angular-editor";

@Component({
  selector: "app-task-create",
  templateUrl: "./task-create.component.html",
  styleUrls: ["./task-create.component.scss"],
})
export class TaskCreateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public statusEnum = Status;
  public users: User[] = [];
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
    placeholder: "Enter text here...",
    defaultParagraphSeparator: "",
    defaultFontName: "",
    defaultFontSize: "",
    fonts: [
      { class: "arial", name: "Arial" },
      { class: "times-new-roman", name: "Times New Roman" },
      { class: "calibri", name: "Calibri" },
      { class: "comic-sans-ms", name: "Comic Sans MS" },
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: "redText",
        class: "redText",
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
    sanitize: true,
    toolbarPosition: "top",
    toolbarHiddenButtons: [["bold", "italic"], ["fontSize"]],
  };

  constructor(
    public dialogRef: MatDialogRef<TaskCreateComponent>,
    public taskService: TaskService,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.getUserData();
    this.closeDialogWithEscapeButton();
  }

  public generateForm() {
    this.form = this.fb.group({
      generatorId: [localStorage.getItem("userId")],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      status: [Status.NotStarted, [Validators.required]],
      responsibleId: [""],
    });
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

  ngOnDestroy(): void {
    this.subscription.forEach((s) => s.unsubscribe());
  }
}
