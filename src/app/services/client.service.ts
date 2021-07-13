import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Clients } from '../models/clients.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private firesore: AngularFirestore) { }

  public createClient(data: Clients){
    return this.firesore.collection('clients').add(data);
  }

  public getClient(documentId: string){
    return this.firesore.collection('clients').doc(documentId).snapshotChanges();
  }

  public getClients(){
    return this.firesore.collection('clients').snapshotChanges();
  }

  public updateClient(documentId: string, data: Clients){
    return this.firesore.collection('clients').doc(documentId).set(data);
  }
}
