import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { HelloComponent } from "./hello/hello.component";
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'form',
      component: FormComponent,
    },
    {
      path: 'hello',
      component: HelloComponent,
    },
    
     
      {
        path:'', redirectTo:'/about',pathMatch:'full'
      }
  ];
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {enableTracing: false}
      )
    ],
    exports: [RouterModule],
    
  })
  export class AppRoutingModule{
  
  }