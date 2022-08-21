import { TitleModule } from '../title/title.module';
import { MatDialogModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalComponent } from "./modal.component";

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    TitleModule,
    BrowserAnimationsModule,
  ],
  exports:[
    ModalComponent,
  ],
  providers: [],
})
export class ModalModule {}
