import { Component, OnInit } from '@angular/core';
import { AppUtilityService } from "../../../../../shared";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public global_utilities: AppUtilityService) {}

  ngOnInit() {
  }

}