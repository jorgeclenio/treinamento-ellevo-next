import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Task } from "./../../../../models/task.model";
import { TaskCreateComponent } from "./../task-create/task-create.component";
import { TaskDeleteComponent } from "./../task-delete/task-delete.component";
import { TaskDetailsComponent } from "./../task-details/task-details.component";
import { TaskUpdateComponent } from "./../task-update/task-update.component";
import { TaskService, SnackbarService } from "./../../../../../shared/services";
import { Status } from "./../../../../../shared/enums/status.enum";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent implements OnInit {
  public title: string = "Task list";
  public subscription: Subscription[] = [];
  public tasks: Task[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private snackbar: SnackbarService,
    private taskService: TaskService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.showTask();
  }

  public getStatusRef(status: Status): string {
    switch (status) {
      case Status.NotStarted:
        return "Not Started";
      case Status.Concluded:
        return "Concluded";
      case Status.InProgress:
        return "In Progress";
      case Status.Waiting:
        return "Waiting";
    }
  }

  public showTask() {
    this.subscription.push(
      this.taskService.getTasks().subscribe(
        (returnTask) => {
          this.tasks = returnTask;
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

  public newTask() {
    let dataTask = this.dialog.open(TaskCreateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
    this.subscription.push(
      dataTask.afterClosed().subscribe(() => this.showTask())
    );
  }

  public navigateToActivityByTask(taskId: string) {
    this.router.navigate([`/home/registration/activity/${taskId}`]);
  }

  public navigateToTaskDetails(taskDetailsId: string) {
    let dataDetails = this.dialog.open(TaskDetailsComponent, {
      minWidth: "650px",
      disableClose: true,
    });

    dataDetails.componentInstance.taskDetailsId = taskDetailsId;

    this.subscription.push(
      dataDetails.afterClosed().subscribe(() => this.showTask())
    );
  }

  public navigateToTaskUpdate(taskUpdateId: string) {
    let dataUpdate = this.dialog.open(TaskUpdateComponent, {
      minWidth: "650px",
      disableClose: true,
    });

    dataUpdate.componentInstance.taskUpdateId = taskUpdateId;

    this.subscription.push(
      dataUpdate.afterClosed().subscribe(() => this.showTask())
    );
  }

  public navigateToTaskDelete() {
    let dataDelete = this.dialog.open(TaskDeleteComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
