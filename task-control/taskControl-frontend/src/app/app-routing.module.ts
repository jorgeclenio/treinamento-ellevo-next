import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  LoginComponent,
  HomeComponent,
  DashboardComponent,
} from "./global-components";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        redirectTo: "/home/dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "registration",
        loadChildren: () =>
          import("./modules/registration").then((m) => m.RegistrationModule),
      },
      {
        path: "**",
        redirectTo: "home",
      },
    ],
  },
  {
    path: "**",
    redirectTo: "login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
