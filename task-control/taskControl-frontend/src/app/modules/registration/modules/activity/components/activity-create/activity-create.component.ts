import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import {
  ActivityService,
  SnackbarService,
} from "./../../../../../shared/services";
import { AddActivity } from "./../../../../models/addActivity.model";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { faBan, faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-activity-create",
  templateUrl: "./activity-create.component.html",
  styleUrls: ["./activity-create.component.scss"],
})
export class ActivityCreateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public taskId: string;
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
    toolbarHiddenButtons: [
      [
        "subscript",
        "superscript",
        "justifyLeft",
        "justifyCenter",
        "justifyRight",
        "justifyFull",
        "indent",
        "outdent",
        "heading",
        "fontName",
      ],
      [
        "fontSize",
        "customClasses",
        "unlink",
        "insertVideo",
        "insertHorizontalRule",
        "toggleEditorMode",
      ],
    ],
  };
  public faBan = faBan;
  public faPlus = faPlus;

  constructor(
    public dialogRef: MatDialogRef<ActivityCreateComponent>,
    public activityService: ActivityService,
    private fb: FormBuilder,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.closeDialogWithEscapeButton();
  }

  public generateForm() {
    this.form = this.fb.group({
      description: ["", [Validators.required]],
      taskId: [this.taskId],
    });
  }

  public createActivity() {
    if (!this.form.valid) {
      return;
    }
    const activity: AddActivity = this.form.value;
    this.subscription.push(
      this.activityService.postActivity(activity).subscribe(
        () => {
          this.snackbar.showSnackbarSuccess("Activity created successfully.");
          this.dialogRef.close();
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "Activity cannot be created."
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
