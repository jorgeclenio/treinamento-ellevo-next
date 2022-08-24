import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  AboutComponent,
  DashboardComponent,
  LoginComponent,
  ProfileComponent,
} from "./modules/shared/views/";

import { HomeComponent } from "./home/";

import { AuthGuard } from "./modules/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
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
        loadChildren: () => import("./modules/registration").then((m) => m.RegistrationModule),
      },
      {
        path: "**",
        redirectTo: "/home/dashboard",
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
