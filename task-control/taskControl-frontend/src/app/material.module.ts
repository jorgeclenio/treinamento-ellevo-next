import { NgModule } from "@angular/core";

import {
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatTableModule,
} from "@angular/material";

const MATERIAL_COMPONENTS = [
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatTableModule,
];

@NgModule({
  imports: [MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS],
})
export class MaterialModule {}
