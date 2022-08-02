import { Component, OnInit } from "@angular/core";
import { TaskControlService } from "src/app/services/task-control.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public message: string;
  constructor(private taskControlService: TaskControlService) {}
  ngOnInit(): void {
    this.taskControlService.getMessage().subscribe({
      next: (message: string) => {
        this.message = message;
      },
    });
  }
}
