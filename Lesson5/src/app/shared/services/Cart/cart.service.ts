import { Injectable } from '@angular/core';
import { CartItemModel } from 'src/app/cart/models/CartItemModel';
import { BookModel } from 'src/app/products/models/BookModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CartService {

  private components = new BehaviorSubject<Array<CartItemModel>>(new Array<CartItemModel>());
  cust = this.components.asObservable();

  constructor() {
    const cartItem: Array<CartItemModel> = [
       new CartItemModel(1, 'Сонячна машина ', 375, 'https://i1.rozetka.ua/goods/2146720/21120877_images_2146720584.jpg', 1),
       new CartItemModel(2, 'Мертві душі', 275, 'https://i1.rozetka.ua/goods/2146720/21120779_images_2146720150.jpg', 1),
       new CartItemModel(3, 'Сад гетсиманський', 310, 'https://i2.rozetka.ua/goods/2146716/21119771_images_2146716223.jpg',1)];
    this.components.next(cartItem);
  }

  getCartItems(): Array<CartItemModel> {
    return this.components.value;
  }

  addToCart(book: BookModel)  {
    if (this.components.value.filter(f => f.id === book.id).length === 1) {
      this.components.value.find(f => f.id === book.id).quantity++;
      this.components.next(this.components.value);
      return;
    }
    this.components.value.push(new CartItemModel(book.id, book.name, book.price, book.img, 1));
  }

  delFromCart(cartItem: CartItemModel)
  {
    const newComponentsList: Array<CartItemModel> = this.components.value.filter(f => f.id !== cartItem.id);
    this.components.next(newComponentsList);
  }

  decQuantity(cartItem: CartItemModel)
  {
    if ( this.components.value.find(f => f.id === cartItem.id).quantity > 1 )
    {
      this.components.value.find(f => f.id === cartItem.id).quantity--;
      this.components.next(this.components.value);
    }
  }

  incQuantity(cartItem: CartItemModel)
  {
    this.components.value.find(f => f.id === cartItem.id).quantity++;
    this.components.next(this.components.value);
  }

  updateTotals(): {sum: number, count: number} {
    let sum: number = 0;
    let count: number = 0;
    this.components.value.forEach(element => {
      sum=sum+(element.price*element.quantity);
      count+=element.quantity;
    });
    return {sum, count}
  }

}
