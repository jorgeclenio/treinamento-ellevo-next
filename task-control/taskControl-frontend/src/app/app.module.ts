import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http"

import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";
import { ProfileComponent } from "./profile/profile.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UsersComponent } from "./users/users.component";
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    ProfileComponent,
    TasksComponent,
    UsersComponent,
    FooterComponent,
    TitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
