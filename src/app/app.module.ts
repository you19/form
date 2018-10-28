import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Globals } from './globals';



import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';
import { AppRoutingModule } from './app.routine.module';
import { FormComponent } from './form/form.component';

 
@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule, FormsModule, AppRoutingModule ],
  declarations: [ 
    AppComponent, 
   
    AboutComponent,
    HelloComponent,
    FormComponent
  
  ],
  providers: [ Globals ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
