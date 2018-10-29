import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItemModel } from '../../models/CartItemModel';
import { CartService } from 'src/app/shared/services/Cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {

  @Input() cartComponent: CartItemModel;
  @Output() removeButtonClicked = new EventEmitter<CartItemModel>();
  @Output() minusButtonClicked = new EventEmitter<CartItemModel>();
  @Output() plusButtonClicked = new EventEmitter<CartItemModel>();
    

  
  constructor(private cartService: CartService) { }
 
  ngOnInit() { }

  onPlusButtonClicked() {
    this.plusButtonClicked.emit(this.cartComponent);
  }

  onMinusButtonClicked(){
    this.minusButtonClicked.emit(this.cartComponent);
    // this.cartService.decQuantity(this.cartComponent);
  }

  onRemoveButtonClicked() {
    this.removeButtonClicked.emit(this.cartComponent);
  }

  


}
