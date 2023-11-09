import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalsRoutingModule } from './globals-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { LocationsComponent } from './locations/locations.component';
import { GlobalsComponent } from './globals.component';



@NgModule({
  declarations: [
    GlobalsComponent,
    CountriesComponent,
    StatesComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule,
    GlobalsRoutingModule,
  ]
})
export class GlobalsModule { }
