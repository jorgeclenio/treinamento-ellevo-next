import { Component, OnInit } from "@angular/core";

import { AppUtilityService } from "../../../shared/";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"],
})
export class ActivityComponent implements OnInit {

  constructor(public global_utilities: AppUtilityService) {}

  ngOnInit(): void {
  }

}
