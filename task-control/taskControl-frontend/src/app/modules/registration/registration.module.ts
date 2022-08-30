import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { MatPaginatorModule } from "@angular/material/paginator";

import { RegistrationRoutingModule } from "./registration-routing.module";
import { SharedModule } from "./../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,

    MatPaginatorModule,

    RouterModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
    SharedModule,
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegistrationModule {}
