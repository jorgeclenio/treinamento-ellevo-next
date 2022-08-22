import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "./../../../shared";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

import {
  UserCreateComponent,
  UserDetailsComponent,
  UserListComponent,
  UserUpdateComponent,
} from "./components";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    SharedModule,
    UserRoutingModule,
  ],
  declarations: [
    UserCreateComponent,
    UserDetailsComponent,
    UserListComponent,
    UserUpdateComponent,
    UserComponent,
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
