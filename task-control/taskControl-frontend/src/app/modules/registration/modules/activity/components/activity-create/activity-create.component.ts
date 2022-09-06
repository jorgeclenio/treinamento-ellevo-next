import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

import { ActivityService } from "./../../../../../shared/services/activity.service";
import { SnackbarService } from "src/app/modules/shared/services/snackbar.service";

import { AddActivity } from "./../../../../models/addActivity.model";

@Component({
  selector: "app-activity-create",
  templateUrl: "./activity-create.component.html",
  styleUrls: ["./activity-create.component.scss"],
})
export class ActivityCreateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];

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
      activity: ["", [Validators.required]],
    });
  }

  public createActivity() {
    if (!this.form.valid) {
      return;
    }
    const activity: AddActivity = this.form.value;
    this.subscription.push(
      this.activityService.postActivity(activity).subscribe(
        (returnActivityCreated) => {
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
