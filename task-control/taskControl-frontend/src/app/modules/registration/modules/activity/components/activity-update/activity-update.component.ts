import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Subscription } from "rxjs";
import { UpdateActivity } from "./../../../../models/updateActivity.model";
import {
  ActivityService,
  SnackbarService,
} from "./../../../../../shared/services";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { faBan, faPencil } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-activity-update",
  templateUrl: "./activity-update.component.html",
  styleUrls: ["./activity-update.component.scss"],
})
export class ActivityUpdateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public activityUpdateId: string;
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
  public faBan = faBan;
  public faPencil = faPencil;

  constructor(
    public dialogRef: MatDialogRef<ActivityUpdateComponent>,
    private activityService: ActivityService,
    private fb: FormBuilder,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showActivityData();
    this.closeDialogWithEscapeButton();
  }

  public generateForm() {
    this.form = this.fb.group({
      description: [null, [Validators.required]],
      taskId: [],
    });
  }

  public showActivityData() {
    this.subscription.push(
      this.activityService.getActivityById(this.activityUpdateId).subscribe(
        (activityData) => {
          this.form.get("description").setValue(activityData.description);
          this.form.get("taskId").setValue(activityData.taskId);
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

  public updateActivity() {
    if (!this.form.valid) {
      return;
    }
    const activity: UpdateActivity = this.form.value;
    this.subscription.push(
      this.activityService
        .updateActivity(this.activityUpdateId, activity)
        .subscribe(
          (returnActivityUpdated) => {
            this.snackbar.showSnackbarSuccess("Activity updated successfully.");
            this.dialogRef.close();
          },
          (error) => {
            this.snackbar.showSnackbarError(
              error.status,
              "Could not update activity."
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
