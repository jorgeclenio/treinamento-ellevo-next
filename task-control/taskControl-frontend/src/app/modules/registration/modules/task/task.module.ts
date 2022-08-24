import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MatInputModule } from "@angular/material";

import { SharedModule } from "./../../../shared";

import { TaskRoutingModule } from "./task-routing.module";
import { TaskComponent } from "./task.component";

import {
  TaskCreateComponent,
  TaskDetailsComponent,
  TaskListComponent,
  TaskUpdateComponent,
} from "./components";

import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    TaskRoutingModule,
    MatTableModule
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
