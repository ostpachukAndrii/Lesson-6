import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { CartService } from './shared/services/Cart/cart.service';
import { BooksService } from './shared/services/Books/books.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    OrdersModule,
    ProductsModule
  ],
  providers: [CartService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
