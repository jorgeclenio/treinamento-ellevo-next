import { Component, OnInit } from "@angular/core";
import { AppUtilityService } from "../../modules/shared";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  public title: string = "About";

  constructor(public global_utilities: AppUtilityService) {}

  ngOnInit() {}
}
