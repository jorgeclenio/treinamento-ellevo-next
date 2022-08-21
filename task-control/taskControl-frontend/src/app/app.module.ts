// import { ModalComponent } from './shared/modal/modal.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { DashboardComponent } from "./modules/views/dashboard/dashboard.component";
import { LoginComponent } from "./modules/views/login/login.component";
import { NavComponent } from "./global-components/nav/nav.component";
import { ProfileComponent } from "./modules/views/profile/profile.component";
// import { TaskComponent } from "./task/task.component";
// import { UserComponent } from "./user/user.component";
import { FooterComponent } from "./global-components/footer/footer.component";
import { AboutComponent } from "./modules/views/about/about.component";

// import { UserDetailsComponent } from "./user/components/user-details/user-details.component";
// import { UserUpdateComponent } from "./user/components/user-update/user-update.component";
// import { UserListComponent } from "./user/components/user-list/user-list.component";
// import { UserCreateComponent } from "./user/components/user-create/user-create.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { ModalModule } from "src/app/shared/modal/modal.module";
// import { TitleModule } from 'src/app/shared/title/title.module';
// import { TaskCreateComponent } from './task/components/task-create/task-create.component';
// import { TaskListComponent } from './task/components/task-list/task-list.component';
// import { TaskUpdateComponent } from './task/components/task-update/task-update.component';
// import { TaskDetailsComponent } from './task/components/task-details/task-details.component';

// import { ModulesComponent } from './modules/modules.component';
// import { RegistrationComponent } from './modules/registration/registration.component';
// import { ModalComponent } from './modules/shared/components/modal/modal.component';
import { TitleComponent } from "./modules/shared/components/title/title.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    ProfileComponent,
    // TaskComponent,
    // UserComponent,
    FooterComponent,
    AboutComponent,

    // UserCreateComponent,
    // UserDetailsComponent,
    // UserListComponent,
    // UserUpdateComponent,
    // TaskCreateComponent,
    // TaskListComponent,
    // TaskUpdateComponent,
    // TaskDetailsComponent,
    // ModulesComponent,
    // RegistrationComponent,
    // ModalComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // ModalModule,
    // TitleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
