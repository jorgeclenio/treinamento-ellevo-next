import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";

import { AppUtilityService } from "../../../../../shared";

import { User } from "./../../../../models/user.model";
import { UserCreateComponent } from "./../user-create/user-create.component";
import { UserDeleteComponent } from "./../user-delete/user-delete.component";
import { UserDetailsComponent } from "./../user-details/user-details.component";
import { UserUpdateComponent } from "./../user-update/user-update.component";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  public title: string = "User list";
  public displayedColumns: string[] = [
    "Id",
    "Name",
    "UserName",
    "Password",
    "Cpf",
    "PhoneNumber",
    "Email",
  ];
  public users: User[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {}

  public newUser() {
    this.dialog.open(UserCreateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToUserDelete() {
    this.dialog.open(UserDeleteComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToUserDetails() {
    this.dialog.open(UserDetailsComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToUserUpdate() {
    this.dialog.open(UserUpdateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
