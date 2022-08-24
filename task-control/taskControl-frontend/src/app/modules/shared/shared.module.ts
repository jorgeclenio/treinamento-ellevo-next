import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  DialogFormComponent,
  FooterComponent,
  HeaderComponent,
  TitleComponent,
} from "src/app/modules/shared/components";

@NgModule({
  declarations: [
    DialogFormComponent,
    FooterComponent,
    HeaderComponent,
    TitleComponent,
  ],
  imports: [CommonModule],
  exports: [
    DialogFormComponent,
    FooterComponent,
    HeaderComponent,
    TitleComponent,
  ],
})
export class SharedModule {}
