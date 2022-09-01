import { SnackbarService } from "./../../../../../shared/services/snackbar.service";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { UserService } from "./../../../../../shared/services/user.service";

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
  public subscription: Subscription[] = [];
  public title: string = "User list";
  public users: User[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private snackbar: SnackbarService,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.showUsers();
  }

  // SHOW USERS REGISTERED IN THE SYSTEM
  public showUsers() {
    this.subscription.push(
      this.userService.getUsers().subscribe(
        (returnUser) => {
          this.users = returnUser;
          this.cdr.detectChanges();
        },
        (error) => {
          this.snackbar.showSnackbarError(error.status, error.error.message);
        }
      )
    );
  }

  // OPEN DIALOG CREATE NEW USER
  public newUser() {
    let dataUser = this.dialog.open(UserCreateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
    this.subscription.push(
      dataUser.afterClosed().subscribe(() => this.showUsers())
    );
  }

  // DIALOG (READ) DETAILS
  public navigateToUserDetails(userDetailsId: string) {
    let userDetails = this.dialog.open(UserDetailsComponent, {
      minWidth: "650px",
      disableClose: true,
    });

    userDetails.componentInstance.userDetailsId = userDetailsId;

    this.subscription.push(
      userDetails.afterClosed().subscribe(() => this.showUsers())
    );
  }

  // DIALOG UPDATE
  public navigateToUserUpdate(userUpdateId: string) {
    let userUpdate = this.dialog.open(UserUpdateComponent, {
      minWidth: "650px",
      disableClose: true,
    });

    userUpdate.componentInstance.userUpdateId = userUpdateId;

    this.subscription.push(
      userUpdate.afterClosed().subscribe(() => this.showUsers())
    );
  }

  // DIALOG DELETE
  public navigateToUserDelete() {
    let navigateUserDelete = this.dialog.open(UserDeleteComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  // RETURN TO DASHBOARD PAGE
  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
