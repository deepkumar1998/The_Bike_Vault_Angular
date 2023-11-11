import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalsRoutingModule } from './globals-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { LocationsComponent } from './locations/locations.component';
import { GlobalsComponent } from './globals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GlobalsComponent,
    CountriesComponent,
    StatesComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule,
    GlobalsRoutingModule,FormsModule,NgbModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class GlobalsModule { }
