import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  show: boolean = true;
  public documentId = null;
  public currentStatus = 1;
  public clientForm: FormGroup;

  constructor(private fb: FormBuilder,
    private clientService: ClientService) { 
    this.clientForm = this.fb.group({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      documento: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      codigoZona: new FormControl('', [Validators.required]),
      esTrabajador: new FormControl(true)
    })
  }

  ngOnInit(): void {
    this.clientForm;
    this.show = this.show
  }

  cambioRadio(){
    this.show = !this.show
    console.log(this.show) 
  }
  
  sendClient(form: any, documentId = this.documentId){
    if (this.currentStatus == 1) {
      this.clientService.createClient(form).then(() => {
        console.log('Documento creado exitósamente!');
        this.clientForm.setValue({
          nombre: '',
          documento: '',
          codigoZona: ''
        });
      }, (error) => {
        console.error(error);
      });
    }
      this.clientForm.reset();
      this.show= true;
  }
}

