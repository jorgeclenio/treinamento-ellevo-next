import { AuthGuard } from "./modules/shared/guards/auth.guard";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  AboutComponent,
  AuthService,
  DashboardComponent,
  FooterComponent,
  LoginComponent,
  NavComponent,
  ProfileComponent,
} from "./global-components";

import { HomeComponent } from "./global-components";
import { TitleComponent, SharedModule } from "./modules/shared";

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
    SharedModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
