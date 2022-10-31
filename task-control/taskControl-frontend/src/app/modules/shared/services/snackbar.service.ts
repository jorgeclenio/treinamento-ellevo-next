import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  private globals: { [key: string]: any } = {
    ongoing_request_count: 0,
    loading_animation_control: new Subject<any>(),
    banner_control: new Subject<any>(),
  };

  error_messages = {
    service_failure:
      "Sorry about this, the system is having some issues. Please refresh the page or try again.",
  };

  constructor(private snackbar: MatSnackBar) {}

  public showSnackbarSuccess(displayMessage: string) {
    let snackbarRef = this.snackbar.open(
      displayMessage || this.error_messages.service_failure,
      "X",
      {
        duration: 2000,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: "snackbarSuccess",
      }
    );
    this.setGlobalData("global_snackbar", snackbarRef);
  }

  public showSnackbarError(code: string, displayMessage: string) {
    let snackbarRef = this.snackbar.open(
      "Error: " + code + ".\n" + displayMessage ||
        "Error: " + code + ".\n" + this.error_messages.service_failure,
      "X",
      {
        duration: 2000,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: "snackbarError",
      }
    );
    this.setGlobalData("global_snackbar", snackbarRef);
  }

  public setGlobalData(key: string, value: any) {
    return this.globals[key];
  }
}
