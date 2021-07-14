import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/products';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   products!: any; 
  products$: Observable<Product[]>;

  constructor(
    private cartService: CartService,
    private router: Router,
  ) { 
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

  goBack(){
    console.log('go back');
    this.router.navigate(['./products'])
  }
  plus(id: string) {
    console.log(this.cartService.products)
    this.cartService.products.filter((obj: any) => obj.id == id)[0].qty += 1;
  }
  minus(id: string) {
    console.log(this.cartService.products)
    const count = this.cartService.products.filter((obj: any) => obj.id == id);
    if (count[0].qty > 1) {
      this.cartService.products.filter((obj: any) => obj.id == id)[0].qty -= 1;
    }
  }
}
