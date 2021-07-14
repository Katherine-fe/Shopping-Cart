import { Component, OnInit , Input,EventEmitter,Output} from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private clientService: ClientService,
    private router: Router) { }

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
  closeModalAceptar(){
    this.router.navigate(['./login'])
  }
}
