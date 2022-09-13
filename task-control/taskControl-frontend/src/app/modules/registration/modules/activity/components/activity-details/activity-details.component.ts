import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { Subscription } from "rxjs";
import { ActivityService, SnackbarService } from "./../../../../../shared/services";

@Component({
  selector: "app-activity-details",
  templateUrl: "./activity-details.component.html",
  styleUrls: ["./activity-details.component.scss"],
})
export class ActivityDetailsComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public activityDetailsId: string;
  public editorConfig: AngularEditorConfig = {
    editable: false,
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
    public dialogRef: MatDialogRef<ActivityDetailsComponent>,
    public activityService: ActivityService,
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
      description: [{ value: "", disabled: true }],
    });
  }

  public showActivityData() {
    this.subscription.push(
      this.activityService.getActivityById(this.activityDetailsId).subscribe(
        (activityData) => {
          this.form.get("description").setValue(activityData.description);
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
