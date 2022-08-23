import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AppUtilityService } from "../..";

import { User } from "./user";

import { AuthService } from "./auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public title: string = "Login";
  public form: FormGroup;

  public user: User = new User();

  constructor(
    private authService: AuthService,
    public fb: FormBuilder,
    public router: Router,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit(): void {
    if (localStorage["token"] != null) {
      this.router.navigate(["/home"]);
    }
    this.generateForm();
  }

  public generateForm() {
    this.form = this.fb.group({
      Username: ["", [Validators.required]],
      Password: ["", [Validators.required]],
    });
  }

  public onSubmit() {
    console.log(this.form)
    if (!this.form.valid) {
      return console.log("Invalid form");
    }
    localStorage.setItem("token", "clenio");
    this.router.navigate(["/home"]);
  }

  public makeLogin() {
    this.authService.makeLogin(this.user);
  }
}
