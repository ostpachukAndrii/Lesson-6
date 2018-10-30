import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';
import { Validator, AbstractControl, Validators, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appDeliveryDateValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AppDeliveryDateValidatorDirective, multi: true }]
})
export class AppDeliveryDateValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): { [key: string]: any } {
    // if( control.value === '')
    // {
    //   return null;
    // }
    const now: Date = new Date();
    const delivery: Date = new Date(control.value);
    const diff: number = delivery.getTime() - now.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    console.log(diffDays);
    if ( diffDays > 1 && diffDays <= 4) {
      return null;
    }
    return {'error': true};
  }
}
  

