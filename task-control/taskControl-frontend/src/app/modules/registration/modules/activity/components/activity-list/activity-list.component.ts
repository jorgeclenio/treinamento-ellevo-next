import { SnackbarService } from "./../../../../../shared/services/snackbar.service";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Activity } from "./../../../../models/activity.model";
import { ActivityCreateComponent } from "./../activity-create/activity-create.component";
import { ActivityDeleteComponent } from "./../activity-delete/activity-delete.component";
import { ActivityDetailsComponent } from "./../activity-details/activity-details.component";
import { ActivityUpdateComponent } from "./../activity-update/activity-update.component";
import { ActivityService } from "./../../../../../shared/services/activity.service";

@Component({
  selector: "app-activity-list",
  templateUrl: "./activity-list.component.html",
  styleUrls: ["./activity-list.component.scss"],
})
export class ActivityListComponent implements OnInit {
  public title: string = "Activity list";
  public subscription: Subscription[] = [];
  public activities: Activity[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private snackbar: SnackbarService,
    private activityService: ActivityService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.showActivities();
  }

  public showActivities() {
    this.subscription.push(
      this.activityService.getActivities().subscribe(
        (returnActivy) => {
          this.activities = returnActivy;
          this.cdr.detectChanges();
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

  public newActivity() {
    let dataActivity = this.dialog.open(ActivityCreateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
    this.subscription.push(
      dataActivity.afterClosed().subscribe(() => this.showActivities())
    );
  }

  public navigateToActivityDetails(activityDetailsId: string) {
    let activityDetails = this.dialog.open(ActivityDetailsComponent, {
      minWidth: "650px",
      disableClose: true,
    });

    activityDetails.componentInstance.activityDetailsId = activityDetailsId;

    this.subscription.push(
      activityDetails.afterClosed().subscribe(() => this.showActivities())
    );
  }

  public navigateToActivityUpdate(activityUpdateId: string) {
    let activityUpdate = this.dialog.open(ActivityUpdateComponent, {
      minWidth: "650px",
      disableClose: true,
    });

    activityUpdate.componentInstance.activityUpdateId = activityUpdateId;

    this.subscription.push(
      activityUpdate.afterClosed().subscribe(() => this.showActivities())
    );
  }

  public navigateToActivityDelete(activityDeleteId: string) {
    let activityDelete = this.dialog.open(ActivityDeleteComponent, {
      minWidth: "650px",
      disableClose: true,
    });

    activityDelete.componentInstance.activityDeleteId = activityDeleteId;

    this.subscription.push(
      activityDelete.afterClosed().subscribe(() => this.showActivities())
    );
  }

  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
