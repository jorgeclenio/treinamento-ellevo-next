import { SnackbarService } from "./../../../../../shared/services/snackbar.service";
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
    public userService: UserService,
    private fb: FormBuilder,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showUserData();
    this.closeDialogWithEscapeButton();
  }

  public generateForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      cpf: [
        null,
        [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
        ],
      ],
      phoneNumber: [null, [Validators.minLength(15), Validators.maxLength(15)]],
      email: [null, [Validators.email]],
    });
  }

  public showUserData() {
    this.subscription.push(
      this.userService.getUserById(this.userUpdateId).subscribe(
        (returnUserData) => {
          const userData = returnUserData;
          this.form.get("name").setValue(userData.name);
          this.form.get("userName").setValue(userData.userName);
          this.form.get("password").setValue(userData.password);
          this.form.get("cpf").setValue(userData.cpf);
          this.form.get("phoneNumber").setValue(userData.phoneNumber);
          this.form.get("email").setValue(userData.email);
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            error.error.messageError
          );
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
          this.snackbar.showSnackbarSuccess(messageSuccess);
          this.dialogRef.close();
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            error.error.messageError
          );
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
