import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/";
import { AboutComponent } from "./modules/shared/views/about/about.component";
import { DashboardComponent } from "./modules/shared/views/dashboard/dashboard.component";
import { LoginComponent } from "./modules/shared/views/login/login.component";
import { ProfileComponent } from "./modules/shared/views/profile/profile.component";
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
        // redirectTo: "/home/dashboard",
        redirectTo: "/home/registration/task/list",
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
