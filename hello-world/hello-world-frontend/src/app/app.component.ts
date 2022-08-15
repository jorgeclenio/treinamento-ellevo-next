import { Component, OnInit } from "@angular/core";
import { HelloWorldService } from "src/app/services/hello-world.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public message: string;
  constructor(private helloWorldService: HelloWorldService) {}
  ngOnInit(): void {
    this.helloWorldService.getMessage().subscribe({
      next: (message: string) => {
        this.message = message;
      },
    });
  }
}
