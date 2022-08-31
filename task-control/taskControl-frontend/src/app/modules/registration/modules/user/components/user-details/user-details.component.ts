import { Subscription } from "rxjs";
import { UserService } from "./../../../../../shared/services/user.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { User } from "./../../../../models/user.model";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public userDetailsId: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showUserData();
    this.closeDialogWithEscapeButton();
  }

  // FUNCTION TO GENERATE FORM
  public generateForm() {
    this.form = this.fb.group({
      Name: [{ value: "", disabled: true }],
      UserName: [{ value: "", disabled: true }],
      Password: [{ value: "", disabled: true }],
      Cpf: [{ value: "", disabled: true }],
      PhoneNumber: [{ value: "", disabled: true }],
      Email: [{ value: "", disabled: true }],
    });
  }

  // FUNCTION TO SHOW USER DATA
  public showUserData() {
    this.subscription.push(
      this.userService.getUserById(this.userDetailsId).subscribe(
        (returnUserData) => {
          const userData = returnUserData;
          this.form.get("Name").setValue(userData.Name);
          this.form.get("UserName").setValue(userData.UserName);
          this.form.get("Password").setValue(userData.Password);
          this.form.get("Cpf").setValue(userData.Cpf);
          this.form.get("PhoneNumber").setValue(userData.PhoneNumber);
          this.form.get("Email").setValue(userData.Email);
        },
        (error) => {
          console.log("doesn't work");
          this.dialogRef.close();
        }
      )
    );
    return false;
  }

  // BUTTON CANCEL FOR CLOSE DIALOG
  public closeDialog() {
    this.dialogRef.close();
  }

  // CLOSE DIALOG WHEN ESC BUTTON IS PRESSED
  public closeDialogWithEscapeButton() {
    this.dialogRef.keydownEvents().subscribe((event) => {
      if (event.key === "Escape") {
        this.dialogRef.close();
      }
    });
  }

  ngOnDestroy(): void {}
}
