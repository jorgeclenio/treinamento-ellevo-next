import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { AddTask, Task, UpdateTask } from "./../../registration/models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  public getTasks(): Observable<any> {
    return this.httpClient.get<Array<Task>>(`${environment.apiUrl()}/task`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public getTaskById(id: string): Observable<any> {
    return this.httpClient.get<Task>(`${environment.apiUrl()}/task/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public postTask(taskData: AddTask): Observable<any> {
    return this.httpClient.post("${environment.apiUrl()}/task", taskData, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public updateTask(id: string, taskData: UpdateTask): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl()}/task/${id}`, taskData, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public deleteTask(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl()}/task/${id}`, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }
}
