import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = [];
  private cart = new BehaviorSubject<Array<Product>>([]);
  cart$ = this.cart.asObservable();
  listCart!: any;

  constructor() { }

  addCart(product: Product, flag: boolean) {
    if (!flag) {
      this.products = [...this.products, product];
    } else {
      this.products = this.products.filter((elm) => elm.id != product.id);
    }
    this.cart.next(this.products)
  }

  removeItem(product: Product) {
    this.listCart = this.cart.getValue();
    let objIndex = this.listCart.findIndex(((obj: any) => obj.id == product.id));
    if (objIndex != -1) {
      this.listCart[objIndex].qty = 1;
      this.listCart.splice(objIndex, 1);
    }
    this.cart.next(this.listCart);
  }

}
