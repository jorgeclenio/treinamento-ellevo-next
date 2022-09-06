import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { UserService } from "src/app/modules/shared/services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  private redirected$ = new BehaviorSubject(false);

  constructor(private router: Router, private userApi: UserService) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    this.navigateTo(state.url);
    return this.redirected$;
  }

  public navigateTo(url: string) {
    this.userApi.tokenVerification().subscribe(
      () => {
        this.router.navigate([url]).then(() => {
          this.redirected$.next(true);
        });
      },
      () => {
        this.router.navigate(["/login"]).then(() => {
          this.redirected$.next(true);
        });
      }
    );
  }
}
