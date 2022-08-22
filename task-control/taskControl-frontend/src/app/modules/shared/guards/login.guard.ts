import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "./../../../global-components/login";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.checkLogin();
  }

  private checkLogin() {
    if (this.authService.validateLogin) {
      return true;
    }

    alert("Login with username and password to gain access");
    this.router.navigate(["/login"]);

    return false;
  }
}
