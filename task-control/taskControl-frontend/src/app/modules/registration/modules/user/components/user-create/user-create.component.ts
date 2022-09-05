import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

import { UserService } from "./../../../../../shared/services/user.service";
import { SnackbarService } from "src/app/modules/shared/services/snackbar.service";

import { AddUser } from "./../../../../models/addUser.model";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.scss"],
})
export class UserCreateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];

  constructor(
    public dialogRef: MatDialogRef<UserCreateComponent>,
    public userService: UserService,
    private fb: FormBuilder,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.closeDialogWithEscapeButton();
  }

  // FUNCTION TO GENERATE FORM
  public generateForm() {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]],
      cpf: [
        "",
        [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
        ],
      ],
      phoneNumber: ["", [Validators.minLength(15), Validators.maxLength(15)]],
      email: ["", [Validators.email]],
    });
  }

  // FUCTION TO CREATE USER
  public createUser() {
    if (!this.form.valid) {
      return;
    }
    const user: AddUser = this.form.value;
    this.subscription.push(
      this.userService.postUser(user).subscribe(
        (returnUserCreated) => {
          this.snackbar.showSnackbarSuccess("User created successfully.");
          this.dialogRef.close();
        },
        (error) => {
          this.snackbar.showSnackbarError(error.status, "User cannot be created.");
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

  ngOnDestroy(): void {
    this.subscription.forEach((s) => s.unsubscribe());
  }
}
