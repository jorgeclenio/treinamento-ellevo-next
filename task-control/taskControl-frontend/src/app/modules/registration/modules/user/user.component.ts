import { Component, OnInit } from "@angular/core";

import { AppUtilityService } from "../../../shared";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  constructor(public global_utilities: AppUtilityService) {}
  ngOnInit(): void {}
}
