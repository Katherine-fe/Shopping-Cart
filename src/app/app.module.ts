import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ModalProductComponent } from './components/modal-product/modal-product.component';
import { ModalPaymentDeliverComponent } from './components/modal-payment-deliver/modal-payment-deliver.component';
import { MainComponent } from './view/main/main.component';
import { ProductsComponent } from './view/products/products.component';
import { CartComponent } from './view/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProductCardComponent,
    ModalProductComponent,
    ModalPaymentDeliverComponent,
    MainComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
