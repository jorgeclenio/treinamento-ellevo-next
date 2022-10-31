import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const ProjectsRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(ProjectsRoutes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
