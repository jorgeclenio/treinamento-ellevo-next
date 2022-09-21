import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { JwtToken } from "./../models/jwtToken.model";
import { AddUser, Login, UpdateUser, User } from "./../../registration/models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public login(loginData: Login): Observable<any> {
    return this.httpClient.post<JwtToken>(
      `${environment.apiUrl()}/login`,
      loginData
    );
  }

  public getUserData() {
    if (!localStorage["jwt_token"]) {
      return null;
    }
    return JSON.parse(atob(localStorage["jwt_token"].split(".")[1]));
  }

  public tokenVerification(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl()}/token-verification`, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get<Array<User>>(`${environment.apiUrl()}/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public getUserById(id: string): Observable<any> {
    return this.httpClient.get<User>(`${environment.apiUrl()}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public postUser(userData: AddUser): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl()}/user`, userData, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public updateUser(id: string, userData: UpdateUser): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl()}/user/${id}`, userData, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl()}/user/${id}`, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }
}
