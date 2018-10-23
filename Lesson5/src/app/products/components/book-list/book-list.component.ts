import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/BookModel';
import { BooksService } from 'src/app/shared/services/Books/books.service';
import { CartService } from 'src/app/shared/services/Cart/cart.service';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public booksPromise: Promise<Array<BookModel>>;

  constructor(private booksSerivce: BooksService, private cartService: CartService)
  {
     this.booksPromise = booksSerivce.getBooksAsync();
  }
  
  ngOnInit() {
    
  }

  onBookAdded(book: BookModel) {
    console.log(book);
    this.cartService.addToCart(book);
  }

}
