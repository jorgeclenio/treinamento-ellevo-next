import { FormBuilder, FormGroup } from "@angular/forms";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { Subscription } from "rxjs";
import { Activity, Task } from "./../../../../models";
import { ActivityCreateComponent } from "./../activity-create/activity-create.component";
import { ActivityDeleteComponent } from "./../activity-delete/activity-delete.component";
import { ActivityDetailsComponent } from "./../activity-details/activity-details.component";
import { ActivityUpdateComponent } from "./../activity-update/activity-update.component";
import {
  ActivityService,
  SnackbarService,
  TaskService,
} from "./../../../../../shared/services";
import { Status } from "src/app/modules/shared";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import {
  faArrowLeft,
  faBars,
  faFile,
  faMagnifyingGlass,
  faPencil,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-activity-list",
  templateUrl: "./activity-list.component.html",
  styleUrls: ["./activity-list.component.scss"],
})
export class ActivityListComponent implements OnInit {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public activities: Activity[] = [];
  public tasks: Task[] = [];
  public generator: string;
  public responsible: string;
  public title: string;
  public status: string;
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
  private taskId: string;
  public faArrowLeft = faArrowLeft;
  public faBars = faBars;
  public faFile = faFile;
  public faMagnifyingGlass = faMagnifyingGlass;
  public faPencil = faPencil;
  public faXmark = faXmark;

  constructor(
    public dialog: MatDialog,
    private taskService: TaskService,
    private router: Router,
    private snackbar: SnackbarService,
    private activityService: ActivityService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.taskId = this.getTaskId("taskId", this.route);
  }

  ngOnInit() {
    this.generateForm();
    this.showActivities();
    this.showTaskData(this.taskId);
  }

  private getTaskId(
    variableName: string,
    currentRoute: ActivatedRouteSnapshot | ActivatedRoute
  ): string {
    if (currentRoute && variableName) {
      if (currentRoute instanceof ActivatedRoute) {
        currentRoute = currentRoute.snapshot;
      }

      const currVal = currentRoute.params[variableName];

      if (currVal) {
        return currVal;
      } else if (currentRoute.parent) {
        return this.getTaskId(variableName, currentRoute.parent);
      } else {
        return undefined;
      }
    }
  }

  private showTaskData(taskId) {
    this.subscription.push(
      this.taskService.getTaskById(taskId).subscribe(
        (taskData) => {
          this.form.get("description").setValue(taskData.description);
          this.generator = taskData.generator.name;
          this.responsible = taskData.responsible.name;
          this.title = taskData.title;
          this.status = taskData.status;
          switch (taskData.status) {
            case Status.Concluded:
              this.status =
                'Concluded <i class="bi bi-circle-fill c_concluded"></i>';
              break;
            case Status.InProgress:
              this.status =
                'In Progress <i class="bi bi-circle-fill c_in-progress"></i>';
              break;
            case Status.Waiting:
              this.status =
                'Waiting <i class="bi bi-circle-fill c_waiting"></i>';
              break;
            default:
              this.status =
                'Not Started <i class="bi bi-circle-fill c_not-started"></i>';
              break;
          }
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "Unable to fetch the requested information."
          );
          this.navigateToTaskList();
        }
      )
    );
    return false;
  }

  public generateForm() {
    this.form = this.fb.group({
      description: [{ value: "", disabled: true }],
    });
  }

  public showActivities() {
    this.subscription.push(
      this.activityService.getActivities(this.taskId).subscribe(
        (returnActivy) => {
          returnActivy.map(
            (activity) =>
              (activity.date = new Date(activity.date).toLocaleString())
          );
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

  public newActivity(taskId) {
    let dataActivity = this.dialog.open(ActivityCreateComponent, {
      minWidth: "650px",
      disableClose: true,
    });

    dataActivity.componentInstance.taskId = taskId;

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

  public navigateToTaskList() {
    this.router.navigate(["/home/registration/task/list"]);
  }
}
