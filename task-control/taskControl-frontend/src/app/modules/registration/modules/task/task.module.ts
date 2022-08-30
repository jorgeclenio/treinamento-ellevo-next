import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule } from "./../../../shared";

import { TaskRoutingModule } from "./task-routing.module";
import { TaskComponent } from "./task.component";

import { MaterialModule } from "./../../../../material.module";

import {
  TaskCreateComponent,
  TaskDetailsComponent,
  TaskListComponent,
  TaskUpdateComponent,
} from "./components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MaterialModule,

    RouterModule,
    ReactiveFormsModule,
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
  exports: [TaskCreateComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TaskModule {}
