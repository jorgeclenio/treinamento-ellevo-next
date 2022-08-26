import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  DialogFormComponent,
  FooterComponent,
  FormDebugComponent,
  HeaderComponent,
  TitleComponent,
} from "src/app/modules/shared/components";

import { CamelCasePipe } from "./pipes/camel-case.pipe";
import { CpfPipe } from './pipes/cpf.pipe';
import { EmailPipe } from './pipes/email.pipe';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';

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
