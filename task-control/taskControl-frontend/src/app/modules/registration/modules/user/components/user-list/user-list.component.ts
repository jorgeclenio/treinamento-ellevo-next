import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";

import { AppUtilityService } from "../../../../../shared";

import { User } from "./../../../../models/user.model";
import { UserCreateComponent } from "./../user-create/user-create.component";
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
    "Username",
    "Password",
    "Cpf",
    "Phonenumber",
    "Email",
  ];

  public users: User[] = [
    {
      Id: "tdf1e1",
      Name: "Jorge Clênio",
      Username: "jorgeclenio",
      Password: "a1b2c3d4e5",
      Cpf: "123.456.759-00",
      Phonenumber: "(00) 12345-1230",
      Email: "jorgeclenio@email.com",
    },
    {
      Id: "tdf1e2",
      Name: "Harry Potter",
      Username: "harry.potter",
      Password: "a1b2c3d4e5",
      Cpf: "123.456.759-01",
      Phonenumber: "(00) 12345-1231",
      Email: "harry.potter@email.com",
    },
    {
      Id: "tdf1e3",
      Name: "Ron Weasley",
      Username: "ron.weasley",
      Password: "a1b2c3d4e5",
      Cpf: "123.456.759-02",
      Phonenumber: "(00) 12345-1232",
      Email: "ron.weasley@email.com",
    },
    {
      Id: "tdf1e4",
      Name: "Hermione Granger",
      Username: "hermione.granger",
      Password: "a1b2c3d4e5",
      Cpf: "123.456.759-03",
      Phonenumber: "(00) 12345-1233",
      Email: "hermione.granger@email.com",
    },
    {
      Id: "tdf1e5",
      Name: "Draco Malfoy",
      Username: "draco.malfoy",
      Password: "a1b2c3d4e5",
      Cpf: "123.456.759-04",
      Phonenumber: "(00) 12345-1234",
      Email: "draco.malfoy@email.com",
    },
  ];

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

  public deleteUser() {
    console.log("delete user");
  }

  public navigateToUserDetails() {
    console.log("call details");
    this.dialog.open(UserDetailsComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToUserUpdate() {
    console.log("call update");
    this.dialog.open(UserUpdateComponent, {
      minWidth: "650px",
      disableClose: true,
    });
  }

  public navigateToDashboard() {
    this.router.navigate(["/home/dashboard"]);
  }
}
