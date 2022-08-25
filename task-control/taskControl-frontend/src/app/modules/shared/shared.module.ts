import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  DialogFormComponent,
  FooterComponent,
  FormDebugComponent,
  HeaderComponent,
  TitleComponent,
} from "src/app/modules/shared/components";

@NgModule({
  declarations: [
    DialogFormComponent,
    FooterComponent,
    HeaderComponent,
    TitleComponent,
    FormDebugComponent,
  ],
  imports: [CommonModule],
  exports: [
    DialogFormComponent,
    FormDebugComponent,
    FooterComponent,
    HeaderComponent,
    TitleComponent,
  ],
})
export class SharedModule {}
