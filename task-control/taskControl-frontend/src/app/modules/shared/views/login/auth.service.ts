import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { Login } from "src/app/modules/registration/models/login.model";
import { Subscriber } from "rxjs";
import { UserService } from "src/app/modules/shared/services/user.service";

@Injectable()
export class AuthService {
  private subscriber = new Subscriber();

  constructor(private router: Router, private userApi: UserService) {}

  public makeLogin(loginData: Login) {
    this.subscriber.add(
      this.userApi.login(loginData).subscribe((response) => {
        localStorage.setItem("jwt_token", response);
        this.router.navigate(["/home"]);
      })
    );
  }
}
