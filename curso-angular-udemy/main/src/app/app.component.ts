import { Component, OnInit } from "@angular/core";
import { AppUtilityService } from "./modules/shared/services/app-utility.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public message: string;

  constructor(public global_utilities: AppUtilityService) {}

  ngOnInit(): void {}
}
