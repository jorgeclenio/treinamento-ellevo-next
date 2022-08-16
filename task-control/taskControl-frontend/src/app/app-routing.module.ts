import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";
import { TasksComponent } from "./tasks/tasks.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "users", component: UsersComponent },
  { path: "tasks", component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
