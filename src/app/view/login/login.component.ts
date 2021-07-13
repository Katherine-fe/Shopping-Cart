import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup= new FormGroup({
    email:new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {   }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    // const today = new Date().toISOString().substring(0, dateLength);
    const minPassLength = 6;
    this.formGroup=this.formBuilder.group({
      // registeredOn: today,
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(minPassLength)]],
    });
  } 

  login(){
    console.log('click login');
    if (this.formGroup.valid) {
      const value = this.formGroup.value;
      this.authService.login(value.email, value.password)
      .then(()=>{
        this.router.navigate(['/products'])
      })
      .catch(()=>{
        alert('Verifica el email y password, por favor.')
      })
    }
  }

}
