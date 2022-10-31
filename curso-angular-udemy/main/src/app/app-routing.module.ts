import { TodoListComponent } from "./modules/projects/pages/home/todo/components/todo-list/todo-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./modules/projects/projects.component";

import { AboutComponent } from "./shared/pages/about/about.component";
import { NotFoundComponent } from "./shared/pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "projects",
    component: ProjectsComponent,
  },
  {
    path: "projects",
    component: ProjectsComponent,
    children: [
      {
        path: "/to-do-list",
        component: TodoListComponent,
      },
    ],
  },
  {
    path: "not-found",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
