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
