import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private firestore: AngularFirestore) { }

  public getProduct() {
    return this.firestore.collection('products').snapshotChanges();
  }

}
