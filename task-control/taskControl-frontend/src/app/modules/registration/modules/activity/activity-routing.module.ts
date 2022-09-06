import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivityComponent } from "./activity.component";
import { ActivityListComponent } from "./components";

const ActivityRoutes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path: "", component: ActivityComponent,
    children: [
      {
        path: "list",
        component: ActivityListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ActivityRoutes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
