import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/CartItemModel';
import { CartService } from 'src/app/shared/services/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  components: Array<CartItemModel>;
  total: number;
  count: number;
  constructor(private cartService: CartService) {
    this.components = cartService.getCartItems();
  }

  ngOnInit() {
    this.cartService.cust.subscribe(comp => { let t = this.cartService.updateTotals();
                                              this.total=t.sum;
                                              this.count=t.count;
                                              this.components = comp; });
  }

  onRemoveButtonClicked(cartItem: CartItemModel)
  {
    this.cartService.delFromCart(cartItem);
  }

  onMinusButtonClicked(cartItem: CartItemModel)
  {
    this.cartService.decQuantity(cartItem);
  }

  onPlusButtonClicked(cartItem: CartItemModel)
  {
    this.cartService.incQuantity(cartItem);
  }

  onCreateOrder(){
    console.log(this.components);
  }

}
