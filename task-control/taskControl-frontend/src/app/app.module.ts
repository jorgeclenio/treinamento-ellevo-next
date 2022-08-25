import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule, MatNativeDateModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AuthService, SharedModule } from "./modules/shared";

import { HomeComponent } from "./home";
import { AuthGuard } from "./modules/shared/guards/auth.guard";

import { AboutComponent } from "./modules/shared/views/about/about.component";
import { DashboardComponent } from "./modules/shared/views/dashboard/dashboard.component";
import { LoginComponent } from "./modules/shared/views/login/login.component";
import { ProfileComponent } from "./modules/shared/views/profile/profile.component";

import {
  TaskCreateComponent,
  TaskDetailsComponent,
  TaskUpdateComponent,
  UserCreateComponent,
  UserDetailsComponent,
  UserUpdateComponent,
} from "./modules/registration/modules";

import { TaskModule, UserModule } from "./modules/registration/modules";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SharedModule,
    TaskModule,
    UserModule,
  ],
  entryComponents: [
    TaskCreateComponent,
    TaskDetailsComponent,
    TaskUpdateComponent,
    UserCreateComponent,
    UserDetailsComponent,
    UserUpdateComponent,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
