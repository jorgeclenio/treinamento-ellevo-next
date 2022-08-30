import { DirectivesModule } from "./../../../shared/directives/directives.module";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule } from "./../../../shared";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

import {
  UserCreateComponent,
  UserDetailsComponent,
  UserListComponent,
  UserUpdateComponent,
} from "./components";

import { MaterialModule } from "./../../../../material.module";
import { UserDeleteComponent } from './components/user-delete/user-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // import all API from material.module.ts
    MaterialModule,

    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule,
    DirectivesModule,
  ],
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserDetailsComponent,
    UserListComponent,
    UserUpdateComponent,
  ],
  exports: [UserCreateComponent],
  entryComponents: [UserDeleteComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
