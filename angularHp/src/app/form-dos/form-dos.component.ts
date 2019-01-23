import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-form-dos',
  templateUrl: './form-dos.component.html',
  styleUrls: ['./form-dos.component.css']
})
export class FormDosComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirm: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(){}


  ngOnInit(){
    
  }

  onSubmit(){
    alert(JSON.stringify(this.form.value))
  }
}
