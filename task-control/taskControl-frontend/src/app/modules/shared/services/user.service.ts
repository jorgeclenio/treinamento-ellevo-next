import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Login } from "./../../registration/models/login.model";
import { UpdateUser } from "./../../registration/models/updateUser.model";
import { AddUser } from "./../../registration/models/addUser.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  // LOGIN
  public login(loginData: Login): Observable<any> {
    return this.httpClient.post("https://localhost:5001/login", loginData, {
      responseType: "text",
    });
  }

  // GET USER DATA
  public getUserData() {
    if(!localStorage['jwt_token']){
      return null;
    }
    return JSON.parse(atob(localStorage['jwt_token'].split('.')[1]));
  }

  // TOKEN VERIFICATION
  public tokenVerification(): Observable<any> {
    return this.httpClient.get("https://localhost:5001/token-verification", {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // GET
  public getUsers(): Observable<any> {
    return this.httpClient.get("https://localhost:5001/user", {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // GET BY ID
  public getUserById(id: string): Observable<any> {
    return this.httpClient.get(`https://localhost:5001/user/${id}`, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // POST
  public postUser(userData: AddUser): Observable<any> {
    return this.httpClient.post("https://localhost:5001/user", userData, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // UPDATE
  public updateUser(userData: UpdateUser): Observable<any> {
    return this.httpClient.put("https://localhost:5001/user", userData, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // DELETE
  public deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(`https://localhost:5001/user/${id}`, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }
}
