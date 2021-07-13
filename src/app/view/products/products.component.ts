import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators'
import { Product } from '../../models/products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  category : string = ""

  constructor(private productService: ProductService) {
    
   }

  ngOnInit(): void {  
}
  
    filterCategoria( category : string) {
      this.category = category;
    }  
  }