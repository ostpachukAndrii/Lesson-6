import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessOrderFormComponent } from './components/process-order-form/process-order-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ProcessOrderFormComponent],
  exports: [ProcessOrderFormComponent]
})
export class OrdersModule { }
