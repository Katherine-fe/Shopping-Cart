import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  @Input() clients: any[] = [];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  deleteClient(client: any){
    this.clientService.deleteClient(client.id)
  }
}
