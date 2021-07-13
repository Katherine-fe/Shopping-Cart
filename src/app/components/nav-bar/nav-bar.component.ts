import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  show:boolean = false;
  total = 0;

  constructor(
    private auth: AuthService,
    private router: Router,
    private cartService: CartService
  ) { 
    this.cartService.cart$.subscribe(products =>{
      // console.log(products);
      this.total = products.length;
    })
  }

  ngOnInit(): void {
  }
  toggleCollapse() {
    this.show = !this.show
  }

  logout(){
    this.auth.logout()
    .then(()=>{
      this.router.navigate(['./login'])
    });
  }

}
