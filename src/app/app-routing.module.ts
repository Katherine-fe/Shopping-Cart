import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './view/cart/cart.component';
import { MainComponent } from './view/main/main.component';
import { ProductsComponent } from './view/products/products.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
