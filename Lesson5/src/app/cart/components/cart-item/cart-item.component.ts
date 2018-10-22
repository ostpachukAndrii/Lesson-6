import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItemModel } from '../../models/CartItemModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {

  @Input() cartComponent: CartItemModel;
  @Output() removeButtonClicked = new EventEmitter<CartItemModel>();
  
  constructor() { }
 
  ngOnInit() { }

  onPlusButtonClicked() {
    this.cartComponent.quantity++;
  }

  onMinusButtonClicked(){
    if(this.cartComponent.quantity>1)
    {
      this.cartComponent.quantity--;
    }
  }

  onRemoveButtonClicked(){
    this.removeButtonClicked.emit(this.cartComponent);
  }


}
