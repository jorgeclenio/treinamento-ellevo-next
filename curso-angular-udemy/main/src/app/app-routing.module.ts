import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "home", component: HomeComponent },
  // { path: "about", component: AboutComponent },
  // { path: "not-found", component: NotFoundComponent },
  // { path: "**", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
