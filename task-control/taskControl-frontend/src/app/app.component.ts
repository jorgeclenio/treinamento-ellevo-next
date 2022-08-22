import { Component, OnInit } from "@angular/core";

import { ApiService } from "src/app/services/api.service";
import { AppUtilityService } from "./modules/shared";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public message: string;

  constructor(
    public global_utilities: AppUtilityService,
    private helloWorldService: ApiService
  ) {}

  ngOnInit(): void {
    this.helloWorldService.getMessage().subscribe({
      next: (message: string) => {
        this.message = message;
      },
    });
  }
}
