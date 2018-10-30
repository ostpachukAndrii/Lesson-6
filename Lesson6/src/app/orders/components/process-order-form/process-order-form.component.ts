import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';
import { CartService } from 'src/app/shared/services/Cart/cart.service';
@Component({
  selector: 'app-process-order-form',
  templateUrl: './process-order-form.component.html',
  styleUrls: ['./process-order-form.component.css']
})
export class ProcessOrderFormComponent implements OnInit {
  orderForm: FormGroup;
  fullName: string;
  email: string;
  phone: string;
  deliveryDate: Date;
  payTypes: Array<string>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.payTypes = ['готівка', 'банківська карточка'];
    this.orderForm = new FormGroup({
      'fullName': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('[\+][3][8][0][0-9]{9}')]),
      'payType': new FormControl(this.payTypes[1]),
      'deliveryDate': new FormControl(null, Validators.nullValidator)//  [this.allowedDate] виніс в директиву
    });
  }

  allowedDate(control: FormControl): {[d: string]: boolean}
  {
    if( control.value === '')
    {
      return null;
    }
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

  onSubmit(){
    console.log(
      {
        OrderId: 1,
        name: this.orderForm.value.fullName,
        email: this.orderForm.value.email,
        phone: this.orderForm.value.phone,
        ddate: this.orderForm.value.deliveryDate,
        products: this.cartService.getCartItems(),
        totalQuantity: this.cartService.updateTotals().count,
        totalSum: this.cartService.updateTotals().sum
      }
    )
  }

}
