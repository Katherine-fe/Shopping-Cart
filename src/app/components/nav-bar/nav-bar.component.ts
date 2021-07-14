import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  show:boolean = false;
  total$: Observable<number>;

  constructor(
    private auth: AuthService,
    private router: Router,
    private cartService: CartService
  ) { 
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => {
        // console.log(products);
       const array= products.map((elem)=>{
          return elem.qty
        })
        // console.log(array);
        return array.reduce((accumulator, currentValue) => accumulator + currentValue,0)
      })
    )
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
