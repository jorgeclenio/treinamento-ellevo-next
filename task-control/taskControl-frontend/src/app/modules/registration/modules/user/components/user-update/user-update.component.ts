import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Subscription } from "rxjs";
import { UpdateUser } from "./../../../../models/updateUser.model";
import { SnackbarService, UserService } from "./../../../../../shared/services";
import { faBan, faPencil } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-user-update",
  templateUrl: "./user-update.component.html",
  styleUrls: ["./user-update.component.scss"],
})
export class UserUpdateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public userUpdateId: string;
  public faBan = faBan;
  public faPencil = faPencil;

  constructor(
    public dialogRef: MatDialogRef<UserUpdateComponent>,
    private userService: UserService,
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
        (userData) => {
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
            "Unable to fetch the requested information."
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
    const user: UpdateUser = this.form.value;
    this.subscription.push(
      this.userService.updateUser(this.userUpdateId, user).subscribe(
        (returnUserUpdated) => {
          this.snackbar.showSnackbarSuccess("User updated successfully.");
          this.dialogRef.close();
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "Could not update user."
          );
          this.dialogRef.close();
        }
      )
    );
    return false;
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

  ngOnDestroy() {
    this.subscription.forEach((s) => s.unsubscribe());
  }
}
