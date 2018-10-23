import { Injectable } from '@angular/core';
import { BookModel } from 'src/app/products/models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooksAsync(): Promise<Array<BookModel>> {
    
    const books: Array<BookModel> = [
      new BookModel(1, 'Сонячна машина ', 375, 'https://i1.rozetka.ua/goods/2146720/21120877_images_2146720584.jpg'),
      new BookModel(2, 'Мертві душі', 275, 'https://i1.rozetka.ua/goods/2146720/21120779_images_2146720150.jpg'),
      new BookModel(3, 'Сад гетсиманський', 310, 'https://i2.rozetka.ua/goods/2146716/21119771_images_2146716223.jpg')];
    
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(books);
      }, 1000);
    });
   }
}
