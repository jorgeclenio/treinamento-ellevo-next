import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cpf",
})
export class CpfPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return null;
  }
}
