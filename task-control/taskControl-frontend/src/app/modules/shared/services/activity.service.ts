import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import {
  Activity,
  AddActivity,
  UpdateActivity,
} from "./../../registration/models";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private httpClient: HttpClient) {}

  public getActivities(): Observable<any> {
    return this.httpClient.get<Array<Activity>>(
      "https://localhost:5001/activity",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      }
    );
  }

  public getActivityById(id: string): Observable<any> {
    return this.httpClient.get<Activity>(
      `https://localhost:5001/activity/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      }
    );
  }

  public postActivity(activityData: AddActivity): Observable<any> {
    return this.httpClient.post(
      "https://localhost:5001/activity",
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
      `https://localhost:5001/activity/${id}`,
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
    return this.httpClient.delete(`https://localhost:5001/activity/${id}`, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  }
}
