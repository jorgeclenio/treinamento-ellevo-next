import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DialogFormComponent,
  FooterComponent,
  FormDebugComponent,
  HeaderComponent,
  TitleComponent,
} from "./../shared/components";
import { CamelCasePipe, CpfPipe, EmailPipe, PhoneNumberPipe } from "./pipes";

@NgModule({
  declarations: [
    DialogFormComponent,
    FooterComponent,
    FormDebugComponent,
    HeaderComponent,
    TitleComponent,
    CamelCasePipe,
    CpfPipe,
    EmailPipe,
    PhoneNumberPipe,
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
