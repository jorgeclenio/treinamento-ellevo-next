import { TaskDetailsComponent } from "./../task-details/task-details.component";
import { Task } from "./../../../../models/task.model";
import { TaskCreateComponent } from "./../task-create/task-create.component";
import { MatDialog } from "@angular/material";
import { Component, OnInit } from "@angular/core";

import { AppUtilityService } from "../../../../../shared";
import { TaskUpdateComponent } from "src/app/modules/registration/modules/task/components/task-update";
import { Router } from "@angular/router";

export interface TaskInterface {
  Id: number;
  Generator: string;
  Title: string;
  Description: string;
  Status: string;
  Responsible: string;
  Activity: string;
}

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
      Id: "edf1e1",
      Generator: "Jorge Clênio",
      Title: "Teste 001",
      Description: "Este é um teste 001",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "edf1f2",
      Generator: "Jorge Clênio",
      Title: "Teste 002",
      Description: "Este é um teste 002",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "edf1g3",
      Generator: "Jorge Clênio",
      Title: "Teste 003",
      Description: "Este é um teste 003",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "edf1h4",
      Generator: "Jorge Clênio",
      Title: "Teste 004",
      Description: "Este é um teste 004",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "edf1i5",
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

  public deleteTask() {
    console.log("delete task");
  }

  public navigateToDetails() {
    console.log("call details");
    this.dialog.open(TaskDetailsComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToUpdate() {
    console.log("call update");
    this.dialog.open(TaskUpdateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
