import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { User } from "./user";

@Injectable()
export class AuthService {
  private authUser: boolean = false;

  constructor(private router: Router) {}

  public makeLogin(user: User) {
    if (user.name === "admin" && user.pass === "123") {
      this.authUser = true;

      localStorage.setItem('token', 'clenio');

      this.router.navigate(["/home"]);
    } else {
      this.authUser = false;
    }
  }

  public userIsAuth() {
    if (localStorage.getItem('token') === 'clenio'){
      return true;
    }
    return this.authUser;
  }
}
