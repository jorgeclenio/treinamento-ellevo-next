import { MatDialogModule } from "@angular/material";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TitleComponent } from "./title.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  exports: [TitleComponent],
  providers: [],
})
export class TitleModule {}
