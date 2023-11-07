import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavberComponent } from './navber/navber.component';





@NgModule({
  declarations: [
    NavberComponent,
    
    
  ],
  imports: [
    CommonModule, 
  ],
  exports:[
    NavberComponent,
  ]
})
export class HeaderModule { }
