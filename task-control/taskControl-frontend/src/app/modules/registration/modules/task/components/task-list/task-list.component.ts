import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";

import { AppUtilityService } from "../../../../../shared";

import { Task } from "./../../../../models/task.model";
import { TaskCreateComponent } from "./../task-create/task-create.component";
import { TaskDeleteComponent } from "./../task-delete/task-delete.component";
import { TaskDetailsComponent } from "./../task-details/task-details.component";
import { TaskUpdateComponent } from "./../task-update/task-update.component";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent implements OnInit {
  public title: string = "Task list";

  public displayedColumns: string[] = [
    "Id",
    "Generator",
    "Title",
    "Description",
    "Status",
    "Responsible",
    "Activity",
  ];

  public tasks: Task[] = [
    {
      Id: "tdf1e1",
      Generator: "Jorge Clênio",
      Title: "Teste 001",
      Description: "Este é um teste 001",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "tdf1f2",
      Generator: "Jorge Clênio",
      Title: "Teste 002",
      Description: "Este é um teste 002",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "tdf1g3",
      Generator: "Jorge Clênio",
      Title: "Teste 003",
      Description: "Este é um teste 003",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "tdf1h4",
      Generator: "Jorge Clênio",
      Title: "Teste 004",
      Description: "Este é um teste 004",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "tdf1i5",
      Generator: "Jorge Clênio",
      Title: "Teste 005",
      Description: "Este é um teste 005",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
  ];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {}

  public newTask() {
    this.dialog.open(TaskCreateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToTaskDelete() {
    this.dialog.open(TaskDeleteComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToTaskDetails() {
    this.dialog.open(TaskDetailsComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToTaskUpdate() {
    this.dialog.open(TaskUpdateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
