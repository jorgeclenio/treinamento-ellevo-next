import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { AddTask, Task, UpdateTask } from "./../../registration/models";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  public getTasks(): Observable<any> {
    return this.httpClient.get<Array<Task>>("https://localhost:5001/task", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public getTaskById(id: string): Observable<any> {
    return this.httpClient.get<Task>(`https://localhost:5001/task/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public postTask(taskData: AddTask): Observable<any> {
    return this.httpClient.post("https://localhost:5001/task", taskData, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public updateTask(id: string, taskData: UpdateTask): Observable<any> {
    return this.httpClient.put(`https://localhost:5001/task/${id}`, taskData, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  public deleteTask(id: string): Observable<any> {
    return this.httpClient.delete(`https://localhost:5001/task/${id}`, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }
}
