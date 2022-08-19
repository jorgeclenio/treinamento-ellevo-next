import { UserCreateComponent } from './components/user-create/user-create.component';
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {

  @ViewChild(UserCreateComponent, { static: false })
  private createUserModal: UserCreateComponent;
  public nome = 'sasa'

  public title: string = "Registered Users";

  constructor() {}

  ngOnInit() {}

  public openModal(): void {
    this.createUserModal.openModal();
  }
}
