import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TaskComponent } from "./task.component";
import { TaskListComponent } from "./components";

const TaskRoutes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path: "", component: TaskComponent,
    children: [
      {
        path: "list",
        component: TaskListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(TaskRoutes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
