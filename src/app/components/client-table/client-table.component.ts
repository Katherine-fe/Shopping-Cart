import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  @Input() clients: any[] = []; //viene de su padre Client
 

  show: boolean= false;
  client: object= {};

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  editClient(client: any){
    this.clientService.getClient(client.id).subscribe((clientSnapshot) => {
      console.log(clientSnapshot);
    })
  }

  // deleteClient(client: any){
  //   // this.clientService.deleteClient(client.id)
  //   this.deleteC.emit(client)
  // }
  showModal(){
    this.show=true;
  }

  openModalDelete(client: any){
    // this.show = cond;
    this.client = client;
    this.showModal()
  }

  closeModalDelete(con: boolean){
    this.show= con;
  }
}
