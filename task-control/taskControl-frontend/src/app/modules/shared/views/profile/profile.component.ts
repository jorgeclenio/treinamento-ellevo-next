import { SnackbarService } from "./../../services/snackbar.service";
import { Subscription } from "rxjs";
import { FormGroup } from "@angular/forms";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { AppUtilityService } from "../../services/app-utility.service";

import { UserService } from "./../../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public userId: string = "";
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public title: string = "Profile";
  public userName: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackbar: SnackbarService,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showLoggedUserDetails();

    const token = this.userService.getUserData();
    const name = token.unique_name.split(" ");
    this.userName = name[0];
  }

  // GENERATE FORM WITH INFORMATIONS
  public generateForm() {
    this.form = this.fb.group({
      name: [{ value: "", disabled: true }],
      userName: [{ value: "", disabled: true }],
      password: [{ value: "", disabled: true }],
      cpf: [{ value: "", disabled: true }],
      phoneNumber: [{ value: "", disabled: true }],
      email: [{ value: "", disabled: true }],
    });
  }

  // SHOW INFORMATIONS ABOUT LOGGED USER
  public showLoggedUserDetails() {
    this.subscription.push(
      this.userService.getUserById(this.userId).subscribe(
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
          this.snackbar.showSnackbarError(error.status, error.error.message);
        }
      )
    );
  }

  // RETURN TO DASHBOARD PAGE
  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }

  ngOnDestroy(): void {}
}
