import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  items!: Array<Product>;
  products!: any;
  @Input() search!: string;
  @Input() cart!: string;
  @Output() filterCategoria: EventEmitter<any> = new EventEmitter();

  // products!: Product[];
  product: Product[];
  orders: [] = [];
  qty = 1;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.product = []
  }

  ngOnInit(): void {
    this.getListProduct();
    this.filterCategoriaChild();
  }

  getListProduct() {
    this.productService.getProduct().subscribe((catsSnapshot) => {
      this.products = [];
      catsSnapshot.forEach((prod: any) => {
        this.products.push({
          id: prod.payload.doc.id,
          data: prod.payload.doc.data(),
          qty: this.qty,
          status: false
        });
      })
    });
  }
  filterCategoriaChild() {
    this.filterCategoria.emit();
  }
  addCart(product: any) {
    this.cartService.addCart(product)
  }

  minus(id: string) {
    const count = this.products.filter((obj: any) => obj.id == id);
    if (count[0].qty > 1) {
      this.products.filter((obj: any) => obj.id == id)[0].qty -= 1;
    }
  }
  plus(id: string) {
    this.products.filter((obj: any) => obj.id == id)[0].qty += 1;
  }

  add(product: Product) {
    this.addCart(product)
    this.products.filter((obj: any) => obj.id == product.id)[0].status = true;
    // this.orders.push({
    // });
  }
  delete(product: Product) {
    this.products.filter((obj: any) => obj.id == product.id)[0].status = false;
    this.products.filter((obj: any) => obj.id == product.id)[0].qty = 1;

  }


}


