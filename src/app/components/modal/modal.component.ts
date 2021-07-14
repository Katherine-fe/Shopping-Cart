import { Component, OnInit , Input,EventEmitter,Output} from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() visibleDeleteClient: boolean= false;
  @Input() client: any;

  // @Output() getModal: EventEmitter<boolean> = new EventEmitter();
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  constructor(private clientService: ClientService) { }


  ngOnInit(): void {
  }

  deleteClient(){
    // this.clientService.deleteClient(client.id)
    console.log('click en delete');
    console.log(this.client)
    this.clientService.deleteClient(this.client.id);
    this.closeModal.emit(false)
  }

  closeModalDelete(){
    this.closeModal.emit(false)
  }

  // getModalC(show: any){
  //   this.getModal.emit()
  // }

}
