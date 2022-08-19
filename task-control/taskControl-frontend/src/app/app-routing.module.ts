import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "profile", component: ProfileComponent },
  { path: "task", component: TaskComponent },
  { path: "user", component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
