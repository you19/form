import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent  {

  private role: string;
  
  constructor(private globals: Globals,public router:Router) {
   
  }
  
  private changedRole() {
    this.globals.role = this.role;
    this.router.navigate(['about']);

  }
}
