import { Task } from './../../registration/models/task.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UpdateTask } from "src/app/modules/registration/models/updateTask.model";
import { AddTask } from "src/app/modules/registration/models/addTask.model";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  // GET
  public getTasks(): Observable<any> {
    return this.httpClient.get<Array<Task>>("https://localhost:5001/task", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }

  // GET BY ID
  public getTaskById(id: string): Observable<any> {
    return this.httpClient.get(`https://localhost:5001/task/${id}`, {
      responseType: "text",
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
  public updateTask(taskData: UpdateTask): Observable<any> {
    return this.httpClient.put("https://localhost:5001/task", taskData, {
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
