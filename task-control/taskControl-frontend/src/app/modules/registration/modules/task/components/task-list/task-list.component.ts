import { Component, OnInit } from '@angular/core';

import { AppUtilityService } from "../../../../../shared";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public title: string = "Task List";

  constructor(
    public global_utilities: AppUtilityService
  ) {}

  ngOnInit() {
  }
}
