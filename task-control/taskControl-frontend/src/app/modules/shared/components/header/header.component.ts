import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AppUtilityService, UserService } from "../../services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public userName: string = "";

  constructor(
    private router: Router,
    private userService: UserService,

    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {
    const token = this.userService.getUserData();
    const name = token.unique_name.split(' ');

    this.userName = name[0];
  }

  public navigateToAbout() {
    this.router.navigate(["/home/about"]);
  }

  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  public navigateToProfile() {
    this.router.navigate(["/home/profile"]);
  }

  public navigateToActivity() {
    this.router.navigate(["/home/registration/activity"]);
  }

  public navigateToTask() {
    this.router.navigate(["/home/registration/task"]);
  }

  public navigateToUser() {
    this.router.navigate(["/home/registration/user"]);
  }
}
