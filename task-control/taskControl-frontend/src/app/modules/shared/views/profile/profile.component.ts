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
  public userName: string = "";

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showLoggedUserDetails();

    const token = this.userService.getUserData();
    const name = token.unique_name.split(' ');
    this.userName = name[0];
  }

  // GENERATE FORM WITH INFORMATIONS
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

  // SHOW INFORMATIONS ABOUT LOGGED USER
  public showLoggedUserDetails() {
    this.subscription.push(
      this.userService.getUserById(this.userId).subscribe(
        (returnUserData) => {
          const userData = returnUserData.result;
          this.form.get("Name").setValue(userData.Name);
          this.form.get("UserName").setValue(userData.UserName);
          this.form.get("Password").setValue(userData.Password);
          this.form.get("Cpf").setValue(userData.Cpf);
          this.form.get("PhoneNumber").setValue(userData.PhoneNumber);
          this.form.get("Email").setValue(userData.Email);
        },
        (error) => {
          console.log("doesn't work");
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
