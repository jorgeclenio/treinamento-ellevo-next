import { NgModule } from "@angular/core";

import {
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule,
} from "@angular/material";

const MATERIAL_COMPONENTS = [
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule,
];

@NgModule({
  imports: [MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS],
})
export class MaterialModule {}
