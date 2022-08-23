import { MatDialog } from "@angular/material";
import { TaskCreateComponent } from "./../task-create/task-create.component";
import { Component, OnInit } from "@angular/core";

import { AppUtilityService, DialogFormComponent } from "../../../../../shared";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent implements OnInit {
  public title: string = "Task List";

  constructor(
    public dialog: MatDialog,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {}

  public createTask(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: "400px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
