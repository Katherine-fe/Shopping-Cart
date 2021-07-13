import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private firestore: AngularFirestore) { }

  public getProduct() {
    return this.firestore.collection('products').snapshotChanges();
  }
}
