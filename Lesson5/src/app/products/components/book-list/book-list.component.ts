import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/BookModel';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

   public books: Array<BookModel>;

  constructor(){}
  
  ngOnInit() {
    this.books = [new BookModel(1, 'Сонячна машина ', 375, "https://i1.rozetka.ua/goods/2146720/21120877_images_2146720584.jpg"),
    new BookModel(2, 'Мертві душі', 275, 'https://i1.rozetka.ua/goods/2146720/21120779_images_2146720150.jpg'),
    new BookModel(3, 'Сад гетсиманський', 310, 'https://i2.rozetka.ua/goods/2146716/21119771_images_2146716223.jpg')];
  }

  onBookAdded(book: BookModel){
    console.log(book.name);
  }

}
