import { UserModule } from "./modules/registration/modules/user/user.module";
import { UserCreateComponent } from "./modules/registration/modules/user/components/user-create/user-create.component";
import { TaskModule } from "./modules/registration/modules/task/task.module";
import { MatInputModule, MatNativeDateModule } from "@angular/material";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  SharedModule,
  DashboardComponent,
  LoginComponent,
  ProfileComponent,
  AboutComponent,
  AuthService,
} from "./modules/shared";

import { AuthGuard } from "./modules/shared/guards/auth.guard";

import { MatDialogModule } from "@angular/material/dialog";
import { HomeComponent } from "./home";
import { TaskCreateComponent } from "src/app/modules/registration/modules/task";

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
  entryComponents: [TaskCreateComponent, UserCreateComponent],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
