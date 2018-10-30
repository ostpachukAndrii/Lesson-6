import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHighlightDirective } from './directives/appHighLight/app-highlight.directive';
import { AppDeliveryDateValidatorDirective } from './directives/appDeliveryDateValidator/app-delivery-date-validator.directive';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AppHighlightDirective, AppDeliveryDateValidatorDirective],
  exports: [AppHighlightDirective, AppDeliveryDateValidatorDirective]
})
export class SharedModule { }
