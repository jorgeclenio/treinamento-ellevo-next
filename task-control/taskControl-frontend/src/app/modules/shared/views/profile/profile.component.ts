import { SnackbarService } from "./../../services/snackbar.service";
import { Subscription } from "rxjs";
import { FormGroup } from "@angular/forms";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AppUtilityService } from "../../services/app-utility.service";
import { UserService } from "./../../services/user.service";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public userId: string = localStorage.getItem("userId");
  public form: FormGroup;
  public subscription: Subscription[] = [];
  public title: string = "Profile";
  public userName: string;
  public faBars = faBars;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackbar: SnackbarService,
    private cdr: ChangeDetectorRef,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.showLoggedUserDetails();

    const token = this.userService.getUserData();
    this.userName = token.unique_name;
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
        (userData) => {
          this.form.get("name").setValue(userData.name);
          this.form.get("userName").setValue(userData.userName);
          this.form.get("password").setValue(userData.password);
          this.form.get("cpf").setValue(userData.cpf);
          this.form.get("phoneNumber").setValue(userData.phoneNumber);
          this.form.get("email").setValue(userData.email);

          this.cdr.detectChanges();
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "Unable to fetch the requested information."
          );
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
