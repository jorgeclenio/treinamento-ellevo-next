import { AuthGuard } from './modules/shared/guards/auth.guard';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  LoginComponent,
  HomeComponent,
  DashboardComponent,
  AboutComponent,
  ProfileComponent,
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
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      {
        path: "",
        redirectTo: "/home/dashboard",
        pathMatch: "full",
      },
      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
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
