import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { User } from "./../../../../models/user.model";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.generateForm();
    this.closeDialogWithEscapeButton();
  }

  public generateForm() {
    this.form = this.fb.group({
      Name: [{ value: "", disabled: true }],
      Username: [{ value: "", disabled: true }],
      Password: [{ value: "", disabled: true }],
      Cpf: [{ value: "", disabled: true }],
      PhoneNumber: [{ value: "", disabled: true }],
      Email: [{ value: "", disabled: true }],
    });
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public closeDialogWithEscapeButton() {
    this.dialogRef.keydownEvents().subscribe((event) => {
      if (event.key === "Escape") {
        this.dialogRef.close();
      }
    });
  }
}
