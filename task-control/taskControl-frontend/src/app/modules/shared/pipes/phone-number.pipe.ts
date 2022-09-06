import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phoneNumber",
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return null;
  }
}
