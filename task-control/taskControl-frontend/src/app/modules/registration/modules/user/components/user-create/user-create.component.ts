import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

import { User } from "./../../../../models/user.model";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.scss"],
})
export class UserCreateComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserCreateComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.generateForm();
  }

  public generateForm() {
    this.form = this.fb.group({
      Name: ["", [Validators.required]],
      Username: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      Cpf: [
        "",
        [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
        ],
      ],
      Phonenumber: ["", [Validators.required]],
      Email: ["", [Validators.email]],
    });
  }

  public createUser() {
    console.log("create");
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
