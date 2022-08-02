import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class HelloWorldService {
  constructor(private httpClient: HttpClient) {}
  public getMessage(): Observable<string> {
    return this.httpClient.get("https://localhost:5001/hello-world", {
      responseType: "text",
    });
  }
}
