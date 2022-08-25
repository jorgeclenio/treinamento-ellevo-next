import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppUtilityService } from "../..";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  public title: string = "About";

  constructor(
    private router: Router,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {}

  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
