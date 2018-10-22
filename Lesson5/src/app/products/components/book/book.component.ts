import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/BookModel';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  @Output() buyButtonClicked = new EventEmitter<BookModel>();
  constructor() { }

  ngOnInit() {
  }

  onBuyButtonClicked() {
    this.buyButtonClicked.emit(this.book);
  }

}
