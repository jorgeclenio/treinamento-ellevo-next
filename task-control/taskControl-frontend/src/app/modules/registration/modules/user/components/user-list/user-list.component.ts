import { UserService } from "./../../../../../shared/services/user.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";

import { AppUtilityService } from "../../../../../shared";

import { User } from "./../../../../models/user.model";
import { UserCreateComponent } from "./../user-create/user-create.component";
import { UserDeleteComponent } from "./../user-delete/user-delete.component";
import { UserDetailsComponent } from "./../user-details/user-details.component";
import { UserUpdateComponent } from "./../user-update/user-update.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  public subscription: Subscription[] = [];
  public title: string = "User list";
  public users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.showUsers();
  }

  // SHOW USERS
  public showUsers() {
    this.subscription.push(
      this.userService.getUsers().subscribe(
        (returnUser) => {
          return console.log("loaded user list");

        },
        (error) => {
          return console.log("error");

        }
      )
    );
  }

  // DIALOG CREATE
  public newUser() {
    let dataUser = this.dialog.open(UserCreateComponent, { minWidth: "650px", disableClose: true });
    this.subscription.push(dataUser.afterClosed().subscribe(() => this.showUsers()));
  }

  // DIALOG (READ) DETAILS
  public navigateToUserDetails(userDetailsId: string) {
    let userDetails = this.dialog.open(UserDetailsComponent, { minWidth: "650px", disableClose: true });

    userDetails.componentInstance.userDetailsId = userDetailsId;

    this.subscription.push(userDetails.afterClosed().subscribe(() => this.showUsers()));
  }

  // DIALOG UPDATE
  public navigateToUserUpdate(userUpdateId: string) {
    let userUpdate = this.dialog.open(UserUpdateComponent, { minWidth: "650px", disableClose: true });

    userUpdate.componentInstance.userUpdateId = userUpdateId;

    this.subscription.push(userUpdate.afterClosed().subscribe(() => this.showUsers()));
  }

  // DIALOG DELETE
  public navigateToUserDelete() {
    let navigateUserDelete = this.dialog.open(UserDeleteComponent, { minWidth: "650px", disableClose: true });
  }

  // RETURN TO DASHBOARD PAGE
  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
