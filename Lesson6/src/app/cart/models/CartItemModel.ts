import { BookModel } from 'src/app/products/models/BookModel';

export class CartItemModel extends BookModel {
    constructor(
        id: number,
        name: string,
        price: number,
        img: string,
        public quantity: number
        ) {
        super(id, name, price, img);
    }
}
