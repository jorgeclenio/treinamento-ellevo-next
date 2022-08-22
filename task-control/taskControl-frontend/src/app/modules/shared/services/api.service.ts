import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  public getMessage(): Observable<string> {
    return this.httpClient.get("https://localhost:5001/TaskControl", {
      responseType: "text",
    });
  }
}
