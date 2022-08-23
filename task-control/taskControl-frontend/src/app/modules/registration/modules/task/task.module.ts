import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule, DialogFormModule } from "./../../../shared";

import { TaskRoutingModule } from "./task-routing.module";
import { TaskComponent } from "./task.component";

import {
  TaskCreateComponent,
  TaskDetailsComponent,
  TaskListComponent,
  TaskUpdateComponent,
} from "./components";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    DialogFormModule,

    SharedModule,
    TaskRoutingModule,
  ],
  declarations: [
    TaskCreateComponent,
    TaskDetailsComponent,
    TaskListComponent,
    TaskUpdateComponent,
    TaskComponent,
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TaskModule {}
