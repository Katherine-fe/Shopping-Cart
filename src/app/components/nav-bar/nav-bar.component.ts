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
  // total = 0;
  total$: Observable<number>;

  constructor(
    private auth: AuthService,
    private router: Router,
    private cartService: CartService
  ) { 
    // cuando el elemento no se use, se desubscribe con el pipe ASYNC
    // así se evita flujo o pérdidas de memoria = mejor performance
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    )
    // .subscribe(total =>{ 
    //   // console.log(products); 
    //   this.total = total;
    // })

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
