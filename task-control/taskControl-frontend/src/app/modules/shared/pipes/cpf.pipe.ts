import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cpf",
})
export class CpfPipe implements PipeTransform {
  transform(value: string): string | null {
    if (!value) {
      return null;
    }
    const cpf = value.replace(/[^0-9]/g, "");
    if (cpf.length === 11) {
    }
  }

  cpfMask(value) {
    return value.replace(/^(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
  }
}
