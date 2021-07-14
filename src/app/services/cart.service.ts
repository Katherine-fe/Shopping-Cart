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

  constructor() { }

  addCart(product: Product, flag: boolean) {
    let exist = this.products.some(
      (item) => item.data.name === product.data.name
    );
  if (!exist) {
    if (!flag) {
      this.products = [...this.products, product];
    } else {
      this.products = this.products.filter((elm) => elm.id != product.id);
    }
    this.cart.next(this.products)
  }}

  // removeItem(product: Product){
  //   let listCart = this.cart.getValue();
  //   //Buscamos el item del carrito para eliminar
  //   let objIndex = listCart.findIndex((obj => obj.id == product.id));
  //   if(objIndex != -1)
  //   {
  //     //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, 
  //     //si vovlemos a agregarlo la cantidad no se reiniciará)
  //     listCart[objIndex].quantity = 1;
  //     //Eliminamos el item del array del carrito
  //     listCart.splice(objIndex,1);
  //   }
  //   this.cart.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  // }

}
