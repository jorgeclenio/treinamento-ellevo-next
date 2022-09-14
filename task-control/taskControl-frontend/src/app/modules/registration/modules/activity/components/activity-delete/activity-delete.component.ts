import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Subscriber } from "rxjs";
import {
  SnackbarService,
  ActivityService,
} from "src/app/modules/shared/services";
import { faBan, faCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-activity-delete",
  templateUrl: "./activity-delete.component.html",
  styleUrls: ["./activity-delete.component.scss"],
})
export class ActivityDeleteComponent implements OnInit {
  public form: FormGroup;
  public activityDeleteId: string;
  private subscriptions = new Subscriber();
  public faBan = faBan;
  public faCheck = faCheck;

  constructor(
    public dialogRef: MatDialogRef<ActivityDeleteComponent>,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private activityService: ActivityService,
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

  public deleteActivity() {
    this.subscriptions.add(
      this.activityService.deleteActivity(this.activityDeleteId).subscribe(
        (returnActivityDeleted) => {
          this.snackbar.showSnackbarSuccess("Activity deleted successfully.");
          this.dialogRef.close();
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "Activity cannot be deleted."
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
