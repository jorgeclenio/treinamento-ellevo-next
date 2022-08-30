import { AddTask } from "./../../../../models/addTask.model";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { Subscriber, Subscription } from "rxjs";

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
  public title: string = "Task list";

  public subscription: Subscription[] = [];
  public taskService: TaskService;

  public displayedColumns: string[] = [
    "Id",
    "Generator",
    "Title",
    "Description",
    "Status",
    "Responsible",
    "Activity",
  ];
  public tasks: Task[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {
    // serviceTask => getTaks => subscribe => (tasks) this.taks = taks => cdr.detectChanges();
  }

  //
  public showTask() {
    this.subscription.push(this.taskService.getTasks().subscribe());
  }

  // DIALOG CREATE
  public newTask() {
    let dataRef = this.dialog.open(TaskCreateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
    this.subscription.push(
      dataRef.afterClosed().subscribe(() => this.showTask())
    );
  }

  // DIALOG DETAILS
  public navigateToTaskDetails() {
    let dataRef = this.dialog.open(TaskDetailsComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  // DIALOG DETAILS
  public navigateToTaskUpdate() {
    this.dialog.open(TaskUpdateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  // DIALOG DELETE
  public navigateToTaskDelete() {
    this.dialog.open(TaskDeleteComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  // DIALOG DETAILS
  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
