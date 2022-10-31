import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AppUtilityService } from "./../../../../modules/shared/services/app-utility.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  constructor(
    public global_utilities: AppUtilityService,
    public router: Router
  ) {}

  ngOnInit() {}

  public navigateToToDoList() {
    this.router.navigate(["/home/to-do-list"]);
  }

  public navigateToConsultaCep() {
    this.router.navigate(["/home/consulta-cep"]);
  }

  public navigateToConsultaCnpj() {
    this.router.navigate(["/home/consulta-cnpj"]);
  }
}
