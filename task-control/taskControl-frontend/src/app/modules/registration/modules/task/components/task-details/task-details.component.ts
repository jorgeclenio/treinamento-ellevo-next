import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.scss"],
})
export class TaskDetailsComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TaskDetailsComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.generateForm();
  }

  public generateForm() {
    this.form = this.fb.group({
      Generator: [""],
      Title: [""],
      Description: [""],
      Status: [""],
      Responsible: [""],
      Activity: [""],
    });
  }

  public closeDialog() {
    this.dialogRef.close();
    console.log("dialog closed");
  }
}
