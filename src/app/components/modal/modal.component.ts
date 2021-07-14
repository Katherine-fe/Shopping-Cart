import { Component, OnInit , Input,EventEmitter,Output} from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() visibleDeleteClient: boolean= false;
  @Input() visibleFinalizado: boolean= false;
  @Input() client: any;
  @Input() modal: boolean= false
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.closeModalP()
  }

  deleteClient(){
    this.clientService.deleteClient(this.client.id);
    this.closeModal.emit(false)
  }

  closeModalP(){
    this.closeModal.emit(false)
  }

}
