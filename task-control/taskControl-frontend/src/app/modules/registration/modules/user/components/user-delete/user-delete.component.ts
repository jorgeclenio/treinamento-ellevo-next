import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Subscriber } from "rxjs";
import { SnackbarService, UserService } from "./../../../../../shared/services";
import { faBan, faCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-user-delete",
  templateUrl: "./user-delete.component.html",
  styleUrls: ["./user-delete.component.scss"],
})
export class UserDeleteComponent implements OnInit {
  public form: FormGroup;
  public userDeleteId: string;
  public faBan = faBan;
  public faCheck = faCheck;
  private subscriptions = new Subscriber();

  constructor(
    public dialogRef: MatDialogRef<UserDeleteComponent>,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private userService: UserService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.generateForm();
    this.closeDialogWithEscapeButton();
    this.initiateSubscriptions();
  }

  private initiateSubscriptions(): void {
    this.subscriptions.add(
      this.form.get("Checkbox").valueChanges.subscribe((value) => {
        this.cdr.detectChanges();
      })
    );
  }

  public generateForm() {
    this.form = this.fb.group({
      Checkbox: [false, [Validators.required]],
    });
  }

  public deleteUser() {
    this.subscriptions.add(
      this.userService.deleteUser(this.userDeleteId).subscribe(
        () => {
          this.snackbar.showSnackbarSuccess("User deleted successfully.");
          this.dialogRef.close();
        },
        (error) => {
          this.snackbar.showSnackbarError(
            error.status,
            "User cannot be deleted."
          );
          this.dialogRef.close();
        }
      )
    );
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public closeDialogWithEscapeButton() {
    this.dialogRef.keydownEvents().subscribe((event) => {
      if (event.key === "Escape") {
        this.dialogRef.close();
      }
    });
  }
}
