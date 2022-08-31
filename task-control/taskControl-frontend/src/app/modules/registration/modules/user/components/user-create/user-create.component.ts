import { Subscription } from "rxjs";
import { Component, OnDestroy, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

import { User } from "./../../../../models/user.model";
import { UserService } from "src/app/modules/shared/services/user.service";
import { SnackbarService } from "src/app/modules/shared/services/snackbar.service";

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
      Name: ["", [Validators.required]],
      Username: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      Cpf: [
        "",
        [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
        ],
      ],
      PhoneNumber: ["", [Validators.minLength(15), Validators.maxLength(15)]],
      Email: ["", [Validators.email]],
    });
  }

  // FUCTION TO CREATE USER
  public createUser() {
    if (!this.form.valid) {
      return;
    }
    const user: User = this.form.value;
    this.subscription.push(
      this.userService.postUser(user).subscribe(
        (returnUserCreated) => {
          const messageSuccess: string = "User created successfully.";
          this.snackbar.showSnackbarSuccess(messageSuccess);
          this.dialogRef.close();
        },
        (error) => {
          const messageError: string = "User cannot be created.";
          this.snackbar.showSnackbarError(error.status, error.error.Messagem);
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

  // SNACKBAR SUCCESS
  // public openSnackbarSuccess(message: string) {
  //   this.snackbar.open(message, "x", {
  //     duration: 5000,
  //     horizontalPosition: "center",
  //     verticalPosition: "top",
  //     panelClass: "snackbarSucces",
  //   });
  // }

  // SNACKBAR ERROR
  // public openSnackbarError(message: string) {
  //   this.snackbar.open(message, "x", {
  //     duration: 5000,
  //     horizontalPosition: "center",
  //     verticalPosition: "top",
  //     panelClass: "snackbarSucces",
  //   });
  // }

  ngOnDestroy(): void {
    this.subscription.forEach((s) => s.unsubscribe());
  }
}
