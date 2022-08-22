import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { DashboardComponent } from "./global-components/dashboard/dashboard.component";
import { LoginComponent } from "./global-components/login/login.component";
import { NavComponent } from "./global-components/nav/nav.component";
import { ProfileComponent } from "./global-components/profile/profile.component";
import { FooterComponent } from "./global-components/footer/footer.component";
import { AboutComponent } from "./global-components/about/about.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TitleComponent } from "./modules/shared/components/title/title.component";

import { AuthService, HomeComponent } from './global-components';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    ProfileComponent,
    FooterComponent,
    AboutComponent,
    TitleComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
