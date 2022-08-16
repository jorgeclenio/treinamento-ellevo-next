import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  // title = 'taskControl-frontend';
  public message: string;

  constructor(private helloWorldService: ApiService) {}

  ngOnInit(): void {
    this.helloWorldService.getMessage().subscribe({
      next: (message: string) => {
        this.message = message;
      },
    });
  }
}
