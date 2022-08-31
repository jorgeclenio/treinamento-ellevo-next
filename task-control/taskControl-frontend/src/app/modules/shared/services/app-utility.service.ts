import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppUtilityService {
  constructor() {}

  // ROUTING
  public onRouteActivation() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}
