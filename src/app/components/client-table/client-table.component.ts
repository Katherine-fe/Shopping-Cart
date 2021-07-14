import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  @Input() clients: any[] = [];
 
  show: boolean= false;
  show2: boolean= false;
  client: object= {};

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  editClient(client: any){
    this.clientService.getClient(client.id).subscribe((clientSnapshot) => {
    })
  }
  showModal(){
    this.show=true;
  }
  openModalDelete(client: any){
    this.client = client;
    this.showModal()
  }

  openModalFinalizado(){
    this.show2=true;
  }

  closeModalP(con: boolean){
    this.show= con;
    this.show2=con;
  }
}
