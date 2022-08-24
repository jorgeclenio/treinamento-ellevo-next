import { Task } from "./../../../../models/task.model";
import { TaskCreateComponent } from "./../task-create/task-create.component";
import { MatDialog } from "@angular/material";
import { Component, OnInit } from "@angular/core";

import { AppUtilityService } from "../../../../../shared";

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
      Id: "edf1e",
      Generator: "Jorge Clênio",
      Title: "Teste 001",
      Description: "Este é um teste 001",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "edf1f",
      Generator: "Jorge Clênio",
      Title: "Teste 002",
      Description: "Este é um teste 002",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "edf1g",
      Generator: "Jorge Clênio",
      Title: "Teste 003",
      Description: "Este é um teste 003",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "edf1h",
      Generator: "Jorge Clênio",
      Title: "Teste 004",
      Description: "Este é um teste 004",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
    {
      Id: "edf1i",
      Generator: "Jorge Clênio",
      Title: "Teste 005",
      Description: "Este é um teste 005",
      Status: "Ativo",
      Responsible: "Jorge Clênio",
      Activity: "bla",
    },
  ];

  constructor(
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
}
