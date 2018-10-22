import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/CartItemModel';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  components: Array<CartItemModel>;
  constructor() { }

  ngOnInit() {
    this.components = [
      new CartItemModel(1, 'Сонячна машина ', 375, "https://i1.rozetka.ua/goods/2146720/21120877_images_2146720584.jpg", 1),
      new CartItemModel(2, 'Мертві душі', 275, 'https://i1.rozetka.ua/goods/2146720/21120779_images_2146720150.jpg', 1),
      new CartItemModel(3, 'Сад гетсиманський', 310, 'https://i2.rozetka.ua/goods/2146716/21119771_images_2146716223.jpg',1)];
  }

  onRemoveButtonClicked(cartItem: CartItemModel)
  {
     let newComponentsList: Array<CartItemModel>=this.components.filter(f=>f.id!=cartItem.id);
     this.components=newComponentsList;
  }

}
