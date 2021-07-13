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
  


  
/*   productsFilter(typeF : string) {
    this.productService.getProduct().subscribe((catsSnapshot) => {
      this.products = [];
      catsSnapshot.forEach((prod: any) => {
        this.products.push({
          id: prod.payload.doc.id,
          data: prod.payload.doc.data()
        });
      })
     const newProd = this.products.filter(omg => omg.data.categoria == typeF)
      console.log(newProd)
     return newProd ;
      })
    };
     */

    filterCategoria( category : string) {
      this.category = category;
    }  
  }