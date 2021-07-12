import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './view/cart/cart.component';
import { ClientComponent } from './view/client/client.component';
import { LoginComponent } from './view/login/login.component';
import { ProductsComponent } from './view/products/products.component';
import { ClientFormComponent } from './components/client-form/client-form.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'client', component: ClientComponent },
  { path: 'clientForm', component: ClientFormComponent }, //eliminar luego
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
