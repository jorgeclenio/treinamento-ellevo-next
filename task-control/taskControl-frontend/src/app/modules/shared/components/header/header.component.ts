import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AppUtilityService } from "../../services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {}

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

  public navigateToTask() {
    this.router.navigate(["/home/registration/task"]);
  }

  public navigateToUser() {
    this.router.navigate(["/home/registration/user"]);
  }
}
