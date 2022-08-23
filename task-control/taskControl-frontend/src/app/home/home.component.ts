import { Component, OnInit } from '@angular/core';
import { AppUtilityService } from "../modules/shared";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public global_utilities: AppUtilityService) {}

  ngOnInit() {
  }

}
