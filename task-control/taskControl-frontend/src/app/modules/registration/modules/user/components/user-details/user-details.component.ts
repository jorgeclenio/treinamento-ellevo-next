import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Subscription } from "rxjs";
import { SnackbarService, UserService } from "./../../../../../shared/services";

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
    public dialogRef: MatDialogRef<UserDetailsComponent>,
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
      name: [{ value: "", disabled: true }],
      userName: [{ value: "", disabled: true }],
      cpf: [{ value: "", disabled: true }],
      phoneNumber: [{ value: "", disabled: true }],
      email: [{ value: "", disabled: true }],
    });
  }

  public showUserData() {
    this.subscription.push(
      this.userService.getUserById(this.userDetailsId).subscribe(
        (userData) => {
          this.form.get("name").setValue(userData.name);
          this.form.get("userName").setValue(userData.userName);
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

  ngOnDestroy(): void {
    this.subscription.forEach((s) => s.unsubscribe());
  }
}
