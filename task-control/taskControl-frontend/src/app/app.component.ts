import { Component, OnInit } from "@angular/core";

import { ApiService } from "src/app/modules/shared/services/api.service";
import { AppUtilityService, AuthService } from "./modules/shared/";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public message: string;

  constructor(
    private authSevice: AuthService,
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
