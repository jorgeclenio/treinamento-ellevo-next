import { Component, OnInit } from "@angular/core";

import { AppUtilityService } from "../../../shared/";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {

  constructor(public global_utilities: AppUtilityService) {}

  ngOnInit(): void {
  }

}
