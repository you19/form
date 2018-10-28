import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
  
})
export class AboutComponent implements OnInit {
 // private role: string;
  constructor(private globals: Globals,public router:Router){ }

  ngOnInit() {
  }
  private changedRole(s:string) {
    this.globals.role = s;
    this.router.navigate(['hello']);

  }

}
