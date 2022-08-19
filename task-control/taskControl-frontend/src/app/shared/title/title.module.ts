import { MatDialogModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TitleComponent } from "src/app/shared/title/title.component";

@NgModule({
  declarations: [
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  exports:[
    TitleComponent,
  ],
  providers: [],
})
export class TitleModule {}
