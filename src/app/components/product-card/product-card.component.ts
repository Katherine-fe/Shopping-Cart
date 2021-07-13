import { Component, OnInit } from '@angular/core';
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
  products!: Product[];
  product: Product[];

  constructor(  
    private productService: ProductService,
    private cartService: CartService
  ) { 
      this.product = []
    }

  ngOnInit(): void {
    this.getListProduct();    
  }

  getListProduct(){
    this.productService.getProduct().subscribe((catsSnapshot) => {
      this.products = [];
      catsSnapshot.forEach((prod: any) => {
        this.products.push({
          id: prod.payload.doc.id,
          data: prod.payload.doc.data()
        });
      })
    });
  }

  addCart(product: any){
    console.log('va al carrito =)');
    this.cartService.addCart(product)
  }

}


