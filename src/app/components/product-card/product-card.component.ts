import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  items!: Array<Product>;
  products!: Product[];

  constructor(  private productService: ProductService ) { }

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
  }


