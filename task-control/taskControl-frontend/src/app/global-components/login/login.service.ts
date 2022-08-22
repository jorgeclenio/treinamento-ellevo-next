import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  public validateLogin() {
    const user = this.getUserData();
    if(user != null){
      if(user.certserialnumber != null){
        return true;
      }
      return false;
    }
    return false;
  }

  public logout() {
    localStorage.clear();
  }

  public getUserData(){
    if(!localStorage['token']){
      return null;
    }
    return JSON.parse(atob(localStorage['token'].split('.')[1]));
  }
}
