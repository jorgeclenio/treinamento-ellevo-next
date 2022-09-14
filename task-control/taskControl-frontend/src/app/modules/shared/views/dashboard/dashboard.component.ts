import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppUtilityService } from "./../..";
import {
  faBars,
  faListCheck,
  faSquareCheck,
  faSquareXmark,
  faUser
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public title: string = "Dashboard";
  public faBars = faBars;
  public faListCheck = faListCheck;
  public faSquareCheck = faSquareCheck;
  public faSquareXmark = faSquareXmark;
  public faUser = faUser;

  constructor(
    public global_utilities: AppUtilityService,
    private router: Router
  ) {}

  ngOnInit() {}

  public navigateToTask() {
    this.router.navigate(["/home/registration/task"]);
  }

  public navigateToUser() {
    this.router.navigate(["/home/registration/user"]);
  }
}
