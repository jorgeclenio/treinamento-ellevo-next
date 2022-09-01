import { SnackbarService } from "./../../../../../shared/services/snackbar.service";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { AppUtilityService } from "../../../../../shared";

import { Task } from "./../../../../models/task.model";
import { TaskCreateComponent } from "./../task-create/task-create.component";
import { TaskDeleteComponent } from "./../task-delete/task-delete.component";
import { TaskDetailsComponent } from "./../task-details/task-details.component";
import { TaskUpdateComponent } from "./../task-update/task-update.component";

import { TaskService } from "./../../../../../shared/services/task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent implements OnInit {
  public subscription: Subscription[] = [];
  public tasks: Task[] = [];
  public title: string = "Task list";

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private snackbar: SnackbarService,
    private cdr: ChangeDetectorRef,
    private taskService: TaskService,
    // public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {
    // serviceTask => getTaks => subscribe => (tasks) this.taks = taks => cdr.detectChanges();
    this.showTask();
  }

  // SHOW TASKS
  public showTask() {
    this.subscription.push(
      this.taskService.getTasks().subscribe(
        (returnTask) => {
          this.tasks = returnTask;
          this.cdr.detectChanges();
        },
        (error) => {
          this.snackbar.showSnackbarError(error.status, error.error.message);
        }
      )
    );
  }

  // DIALOG CREATE
  public newTask() {
    let dataTask = this.dialog.open(TaskCreateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
    this.subscription.push(
      dataTask.afterClosed().subscribe(() => this.showTask())
    );
  }

  // DIALOG (READ) DETAILS
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

  // DIALOG UPDATE
  public navigateToTaskUpdate(taskUpdateId) {
    let dataUpdate = this.dialog.open(TaskUpdateComponent, {
      minWidth: "650px",
      disableClose: true,
    });

    dataUpdate.componentInstance.taskUpdateId = taskUpdateId;

    this.subscription.push(
      dataUpdate.afterClosed().subscribe(() => this.showTask())
    );
  }

  // DIALOG DELETE
  public navigateToTaskDelete() {
    let dataDelete = this.dialog.open(TaskDeleteComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  // RETURN TO DASHBOARD PAGE
  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
