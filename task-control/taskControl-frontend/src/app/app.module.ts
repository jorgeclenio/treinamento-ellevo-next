import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuard, AuthService, SharedModule } from "./modules/shared";
import { HomeComponent } from "./home";
import { AboutComponent } from "./modules/shared/views/about/about.component";
import { DashboardComponent } from "./modules/shared/views/dashboard/dashboard.component";
import { ProfileComponent } from "./modules/shared/views/profile/profile.component";
import { LoginComponent } from "./modules/shared/views/login/login.component";
import {
  ActivityModule,
  ActivityCreateComponent,
  ActivityDetailsComponent,
  ActivityUpdateComponent,
  TaskModule,
  TaskCreateComponent,
  TaskDetailsComponent,
  TaskUpdateComponent,
  UserModule,
  UserCreateComponent,
  UserDetailsComponent,
  UserUpdateComponent,
} from "./modules/registration/modules";
import { MaterialModule } from "./material.module";

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
    ActivityModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    TaskModule,
    UserModule,
  ],
  entryComponents: [
    ActivityCreateComponent,
    ActivityDetailsComponent,
    ActivityUpdateComponent,
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
