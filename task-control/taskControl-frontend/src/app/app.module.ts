import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http"

import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";
import { ProfileComponent } from "./profile/profile.component";
import { TaskComponent } from "./task/task.component";
import { UserComponent } from "./user/user.component";
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    ProfileComponent,
    TaskComponent,
    UserComponent,
    FooterComponent,
    TitleComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
