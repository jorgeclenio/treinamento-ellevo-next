import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self
} from "@angular/core";
import Cleave from "cleave.js";

import { NgControl } from "@angular/forms";

@Directive({
  selector: "[appMask]",
})
export class MaskDirective implements OnInit, OnDestroy {
  @Input("appMask")
  public appMask: "cpf" | "phone";

  @Input("appMaskCustom")
  public custom: string;

  @Input("appMaskNumberMaxLength")
  public maxLength: number;
  @Input("appMaskNumberMinValue")
  public minValue: number;
  @Input("appMaskNumberMaxValue")
  public maxValue: number;
  @Input("appMaskNumberDecimalScale")
  public decimalScale = 2;

  private cleave: Cleave;
  private firstValueCorrection = true;

  constructor(
    private hostElRef: ElementRef<HTMLInputElement>,
    @Optional() @Self() private control: NgControl
  ) {}

  ngOnInit(): void {
    this.buildCleave();
  }

  private buildCleave(options: Object = {}): void {
    const hostEl = this.hostElRef.nativeElement;
    const cleaveOptions = this.getCleaveOptions(hostEl.value);
    this.cleave = new Cleave(hostEl, {
      ...cleaveOptions,
      ...options,
      onValueChanged: (e) => {
        const value = e.target.value as string;
        const control = this.control && this.control.control;
        if (control && control.value !== value) {
          const eventOpts = {} as any;
          if (this.firstValueCorrection) {
            this.firstValueCorrection = false;
            eventOpts.emitEvent = false;
          }
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.destroyCleaveJs();
  }

  private destroyCleaveJs(): void {
    if (this.cleave) {
      this.cleave.destroy();
    }
  }
  private getCleaveOptions(currentValue: string): Object {
    switch (this.appMask) {
      case "cpf":
        return {
          delimiters: [".", ".", "-"],
          blocks: [3, 3, 3, 2],
          numericOnly: true,
        };
      case "phone":
        let delimiters = ["(", ")", " ", "-"];
        let blocks = [0, 2, 0, 5, 4];
        return {
          delimiters: delimiters,
          blocks: blocks,
          numericOnly: true,
        };
      default:
        throw new Error("Type not found");
    }
  }
}
