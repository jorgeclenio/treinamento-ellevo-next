import { NgModule } from "@angular/core";

import {
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTableModule,
} from "@angular/material";

const MATERIAL_COMPONENTS = [
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTableModule,
];

@NgModule({
  imports: [MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS],
})
export class MaterialModule {}
