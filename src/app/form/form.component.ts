import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  
 

  constructor(public router:Router,private fb:FormBuilder) {
 
  }

  onSaveContact(dataForm){
      console.log(dataForm)
  }
}