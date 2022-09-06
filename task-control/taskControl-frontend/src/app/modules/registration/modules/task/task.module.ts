import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule } from "./../../../shared";

import { MaterialModule } from "./../../../../material.module";

import {
  TaskCreateComponent,
  TaskDeleteComponent,
  TaskDetailsComponent,
  TaskListComponent,
  TaskUpdateComponent,
} from "./components";

import { TaskComponent } from "./task.component";
import { TaskRoutingModule } from "./task-routing.module";

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
    TaskComponent,
    TaskCreateComponent,
    TaskDeleteComponent,
    TaskDetailsComponent,
    TaskListComponent,
    TaskUpdateComponent,
  ],
  exports: [TaskCreateComponent],
  entryComponents: [TaskDeleteComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TaskModule {}
