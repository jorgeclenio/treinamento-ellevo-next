import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { AddTask } from "./../../registration/models/addTask.model";
import { UpdateTask } from "./../../registration/models/updateTask.model";

import { Task } from "./../../registration/models/task.model";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  // GET TASKS
  public getTasks(): Observable<any> {
    return this.httpClient.get<Array<Task>>("https://localhost:5001/task", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // GET TASKS BY ID
  public getTaskById(id: string): Observable<any> {
    return this.httpClient.get<Task>(`https://localhost:5001/task/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // POST
  public postTask(taskData: AddTask): Observable<any> {
    return this.httpClient.post("https://localhost:5001/task", taskData, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // UPDATE
  public updateTask(id: string ,taskData: UpdateTask): Observable<any> {
    return this.httpClient.put(`https://localhost:5001/task/${id}`, taskData, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // DELETE
  public deleteTask(id: string): Observable<any> {
    return this.httpClient.delete(`https://localhost:5001/task/${id}`, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }
}
