import { DialogFormModule } from 'src/app/modules/shared/components/dialog-form/dialog-form.module';
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  TitleComponent,
  SharedModule,
  DialogFormComponent,
  DashboardComponent,
  LoginComponent,
  ProfileComponent,
  AboutComponent,
  AuthService,
} from "./modules/shared";

import { AuthGuard } from "./modules/shared/guards/auth.guard";

import { MatDialogModule } from "@angular/material/dialog";
import { HeaderComponent } from './modules/shared/components/header';
import { FooterComponent } from './modules/shared/components/footer';
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
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
    DialogFormModule,
    FormsModule,

    MatDialogModule,

    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  entryComponents: [DialogFormComponent],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
