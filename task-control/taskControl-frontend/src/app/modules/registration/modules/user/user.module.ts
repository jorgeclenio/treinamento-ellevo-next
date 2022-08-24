import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MatInputModule } from "@angular/material";

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
    FormsModule,
    MatInputModule,
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
  exports: [UserCreateComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
