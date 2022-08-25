import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { User } from "./../../../../models/user.model";

@Component({
  selector: "app-user-update",
  templateUrl: "./user-update.component.html",
  styleUrls: ["./user-update.component.scss"],
})
export class UserUpdateComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserUpdateComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.generateForm();
  }

  public generateForm() {
    this.form = this.fb.group({
      Id: [null],
      Name: [null, [Validators.required]],
      Username: [null, [Validators.required]],
      Password: [null, [Validators.required]],
      Cpf: [null, [Validators.required]],
      Phonenumber: [null, [Validators.required]],
      Email: [null, [Validators.required]],
    });
  }

  public updateUser() {
    console.log("update user");
    if (!this.form.valid) {
      return;
    }
    const user: User = this.form.value;
    console.log(user);
  }

  public closeDialog() {
    this.dialogRef.close();
    console.log("dialog closed");
  }
}
