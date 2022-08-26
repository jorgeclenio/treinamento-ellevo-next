import { FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AppUtilityService } from "../../services/app-utility.service";

import { User } from "./../../../registration/models/user.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  public title: string = "Profile";
  public form: FormGroup;

  // chamar dados da model user.model.ts
  public userData: string = "admin";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {
    this.generateForm();
  }

  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }

  public generateForm() {
    this.form = this.fb.group({
      Name: [{ value: "", disabled: true }],
      Username: [{ value: "", disabled: true }],
      Password: [{ value: "", disabled: true }],
      Cpf: [{ value: "", disabled: true }],
      Phonenumber: [{ value: "", disabled: true }],
      Email: [{ value: "", disabled: true }],
    });
  }
}
