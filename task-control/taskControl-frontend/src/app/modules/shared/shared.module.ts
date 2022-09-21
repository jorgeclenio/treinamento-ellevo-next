import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DialogFormComponent,
  FooterComponent,
  FormDebugComponent,
  HeaderComponent,
  TitleComponent,
} from "./../shared/components";

@NgModule({
  declarations: [
    DialogFormComponent,
    FooterComponent,
    FormDebugComponent,
    HeaderComponent,
    TitleComponent,
  ],
  imports: [CommonModule],
  exports: [
    DialogFormComponent,
    FooterComponent,
    FormDebugComponent,
    HeaderComponent,
    TitleComponent,
  ],
})
export class SharedModule {}
