import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppUtilityService } from "./../..";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public title: string = "Dashboard";
  constructor(
    public global_utilities: AppUtilityService,
    private router: Router
  ) {}

  ngOnInit() {}

  // public navigateToActivity() {
  //   this.router.navigate(["/home/registration/activity"]);
  // }

  public navigateToTask() {
    this.router.navigate(["/home/registration/task"]);
  }

  public navigateToUser() {
    this.router.navigate(["/home/registration/user"]);
  }
}
