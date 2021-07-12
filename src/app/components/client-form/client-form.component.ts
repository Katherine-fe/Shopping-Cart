import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  show: boolean = true; 
  radioParami:boolean = true;
  theCheckedBox: boolean =false; //op1
  
  public clientForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.clientForm = this.fb.group({
      client: new FormControl('', [Validators.required]),
      codWorker: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      codZone: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.clientForm;
    this.radioParami;
  }

  toggleVisibility(value: any){
    this.theCheckedBox= value;
  }

 
  

  sendClient(){
    console.log('submit event');
    const formData = this.clientForm.value;
    console.log(formData);
    
  }

}
