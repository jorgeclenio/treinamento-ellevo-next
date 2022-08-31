import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Subscription } from "rxjs";
import { UserService } from "src/app/modules/shared/services/user.service";

import { User } from "./../../../../models/user.model";

@Component({
  selector: "app-user-update",
  templateUrl: "./user-update.component.html",
  styleUrls: ["./user-update.component.scss"],
})
export class UserUpdateComponent implements OnInit {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public userUpdateId: string;

  constructor(
    public dialogRef: MatDialogRef<UserUpdateComponent>,
    private fb: FormBuilder,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showUserData();
    this.closeDialogWithEscapeButton();
  }

  public generateForm() {
    this.form = this.fb.group({
      Id: [null],
      Name: [null, [Validators.required]],
      Username: [null, [Validators.required]],
      Password: [null, [Validators.required]],
      Cpf: [
        null,
        [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
        ],
      ],
      PhoneNumber: [null, [Validators.minLength(15), Validators.maxLength(15)]],
      Email: [null, [Validators.email]],
    });
  }

  public showUserData() {
    this.subscription.push(
      this.userService.getUserById(this.userUpdateId).subscribe(
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
  }

  public updateUser() {
    if (!this.form.valid) {
      return;
    }
    const user: User = this.form.value;
    this.subscription.push(
      this.userService.updateUser(user).subscribe(
        (returnUserUpdated) => {
          const messageSuccess: string = "User updated successfully.";
          alert(messageSuccess);
          this.dialogRef.close();
        },
        (error) => {
          const messageError: string = "User cannot be updated.";
          alert(messageError);
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
}
