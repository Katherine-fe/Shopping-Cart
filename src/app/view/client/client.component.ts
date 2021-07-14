import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clients: object[] =[];

  constructor(private clientService: ClientService) {
   }

  ngOnInit(): void {
    this.getAllClients()
  }
  getAllClients(){
    this.clientService.getClients().subscribe((clientsSnapshot) => {
      this.clients= [];
      clientsSnapshot.forEach((clientData) => {
        const id = clientData.payload.doc.id;
        const data = clientData.payload.doc.data()
        this.clients.push({id: id, data: data})
      })
    })
  }
}

  
  

  


