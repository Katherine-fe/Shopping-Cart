import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  radioParami:boolean = true;
  theCheckedBox: boolean =false; //op1

  public documentId = null;
  public currentStatus = 1;
  public clientForm: FormGroup;


  constructor(private fb: FormBuilder,
    private clientService: ClientService) { 
    this.clientForm = this.fb.group({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      documento: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      codigoZona: new FormControl('', [Validators.required])
    })
    // this.radioButton = this.fb.group({
    //   option: new FormControl(null)
    // })
  }

  ngOnInit(): void {
    this.clientForm;
    this.radioParami;
  }

  toggleVisibility(value: any){
    console.log(value);
    this.theCheckedBox= value;
  }

 
  

  sendClient(form: any, documentId = this.documentId){
    console.log('submit event');
    if (this.currentStatus == 1) {
      // let formData = {
      //   nombre: form.nombre,
      //   documento: form.documento,
      //   codigoZona: form.codZona
      // }
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
    // } else {
    //   let formData = {
    //     nombre: form.nombre,
    //     documento: form.documento,
    //     codigoZona: form.codZona
    //   }
      // this.firestoreService.updateCat(documentId, data).then(() => {
      //   this.currentStatus = 1;
      //   this.newCatForm.setValue({
      //     nombre: '',
      //     url: '',
      //     id: ''
      //   });
      //   console.log('Documento editado exitósamente');
      // }, (error) => {
      //   console.log(error);
      // });
    }
  }

