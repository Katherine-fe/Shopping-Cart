import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  
  @Input() cart!: string;
  @Output() filterCategoria : EventEmitter<any> = new EventEmitter();
  
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
    this.filterCategoriaChild();
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
  filterCategoriaChild(){
    this.filterCategoria.emit();
  }
  addCart(product: any){
    console.log('va al carrito =)');
    this.cartService.addCart(product)
  }

}


