import { Component, OnInit } from "@angular/core";
import { AppUtilityService } from "../..";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public title: string = "Dashboard";

  constructor(public global_utilities: AppUtilityService) {}

  ngOnInit() {}
}
