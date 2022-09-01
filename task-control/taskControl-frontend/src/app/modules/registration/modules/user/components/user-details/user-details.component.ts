import { SnackbarService } from "./../../../../../shared/services/snackbar.service";
import { Subscription } from "rxjs";
import { UserService } from "./../../../../../shared/services/user.service";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

// import { User } from "./../../../../models/user.model";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public subscription: Subscription[] = [];
  // @Input()
  public userDetailsId: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    public userService: UserService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showUserData();
    this.closeDialogWithEscapeButton();
  }

  // FUNCTION TO GENERATE FORM
  public generateForm() {
    this.form = this.fb.group({
      name: [{ value: "", disabled: true }],
      userName: [{ value: "", disabled: true }],
      cpf: [{ value: "", disabled: true }],
      phoneNumber: [{ value: "", disabled: true }],
      email: [{ value: "", disabled: true }],
    });
  }

  // FUNCTION TO SHOW USER DATA
  public showUserData() {
    this.subscription.push(
      this.userService.getUserById(this.userDetailsId).subscribe(
        (returnUserData) => {
          const userData = returnUserData;
          this.form.get("name").setValue(userData.name);
          this.form.get("userName").setValue(userData.userName);
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
