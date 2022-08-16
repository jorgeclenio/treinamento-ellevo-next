import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { ProfileComponent } from "./profile/profile.component";
import { UsersComponent } from "./users/users.component";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    UsersComponent,
    TasksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
