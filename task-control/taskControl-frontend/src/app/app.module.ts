import { ModalComponent } from './shared/modal/modal.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";
import { ProfileComponent } from "./profile/profile.component";
import { TaskComponent } from "./task/task.component";
import { UserComponent } from "./user/user.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";

import { UserDetailsComponent } from "./user/components/user-details/user-details.component";
import { UserUpdateComponent } from "./user/components/user-update/user-update.component";
import { UserListComponent } from "./user/components/user-list/user-list.component";
import { UserCreateComponent } from "./user/components/user-create/user-create.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalModule } from "src/app/shared/modal/modal.module";
import { TitleModule } from 'src/app/shared/title/title.module';
import { TaskCreateComponent } from './task/components/task-create/task-create.component';
import { TaskListComponent } from './task/components/task-list/task-list.component';
import { TaskUpdateComponent } from './task/components/task-update/task-update.component';
import { TaskDetailsComponent } from './task/components/task-details/task-details.component';
import { ModelsComponent } from './task/models/models.component';

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
    AboutComponent,

    UserCreateComponent,
    UserDetailsComponent,
    UserListComponent,
    UserUpdateComponent,
    TaskCreateComponent,
    TaskListComponent,
    TaskUpdateComponent,
    TaskDetailsComponent,
    ModelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule,
    TitleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
