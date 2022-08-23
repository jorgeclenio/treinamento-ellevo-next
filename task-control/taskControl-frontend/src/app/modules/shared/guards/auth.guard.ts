import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "./../../../global-components";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if(this.authService.userIsAuth()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
