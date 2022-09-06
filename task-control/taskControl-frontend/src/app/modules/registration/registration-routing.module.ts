import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const RegistrationRoutes: Routes = [
  {
    path: "activity",
    loadChildren: () =>
      import("./modules/activity").then((m) => m.ActivityModule),
  },
  {
    path: "user",
    loadChildren: () => import("./modules/user").then((m) => m.UserModule),
  },
  {
    path: "task",
    loadChildren: () => import("./modules/task").then((m) => m.TaskModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(RegistrationRoutes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
