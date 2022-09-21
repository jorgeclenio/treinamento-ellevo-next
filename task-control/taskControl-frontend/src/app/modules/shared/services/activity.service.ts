import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import {
  Activity,
  AddActivity,
  UpdateActivity,
} from "./../../registration/models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private httpClient: HttpClient) {}

  public getActivities(taskId: string): Observable<any> {
    return this.httpClient.get<Array<Activity>>(
      `${environment.apiUrl}/activity/task/${taskId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      }
    );
  }

  public getActivityById(id: string): Observable<any> {
    return this.httpClient.get<Activity>(
      `${environment.apiUrl}/activity/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      }
    );
  }

  public postActivity(activityData: AddActivity): Observable<any> {
    return this.httpClient.post(
      "${environment.apiUrl}/activity",
      activityData,
      {
        responseType: "text",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      }
    );
  }

  public updateActivity(
    id: string,
    activityData: UpdateActivity
  ): Observable<any> {
    return this.httpClient.put(
      `${environment.apiUrl}/activity/${id}`,
      activityData,
      {
        responseType: "text",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      }
    );
  }

  public deleteActivity(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/activity/${id}`, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }
}
