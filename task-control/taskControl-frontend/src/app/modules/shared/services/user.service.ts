import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { JwtToken } from "./../models/jwtToken.model";
import { AddUser, Login, UpdateUser, User } from "./../../registration/models";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  // LOGIN
  public login(loginData: Login): Observable<any> {
    return this.httpClient.post<JwtToken>(
      "https://localhost:5001/login",
      loginData
    );
  }

  // GET USER DATA
  public getUserData() {
    if (!localStorage["jwt_token"]) {
      return null;
    }
    return JSON.parse(atob(localStorage["jwt_token"].split(".")[1]));
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

  // GET USERS
  public getUsers(): Observable<any> {
    return this.httpClient.get<Array<User>>("https://localhost:5001/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // GET USERS BY ID
  public getUserById(id: string): Observable<any> {
    return this.httpClient.get<User>(`https://localhost:5001/user/${id}`, {
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
  public updateUser(id: string, userData: UpdateUser): Observable<any> {
    return this.httpClient.put(`https://localhost:5001/user/${id}`, userData, {
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
