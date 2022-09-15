import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppUtilityService } from "../..";
import { AuthService } from "./auth.service";
import { SnackbarService } from "./../../../shared/services/snackbar.service";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public title: string = "Login";
  public form: FormGroup;
  public inputType = "password"
  public faUser = faUser;
  public faLock = faLock;

  constructor(
    private authService: AuthService,
    public fb: FormBuilder,
    public router: Router,
    public snackbar: SnackbarService,
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
      UserName: ["", [Validators.required]],
      Password: ["", [Validators.required]],
    });
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.makeLogin();
  }

  public makeLogin() {
    this.authService.makeLogin(this.form.value);
  }
}
