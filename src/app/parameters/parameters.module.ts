import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { VehicleMakesComponent } from './vehicle-makes/vehicle-makes.component';
import { VehicleModelsComponent } from './vehicle-models/vehicle-models.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { StatusValueComponent } from './status-value/status-value.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    VehicleMakesComponent,
    VehicleModelsComponent,
    VehicleTypesComponent,
    StatusValueComponent,
   
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,FormsModule,NgbModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class ParametersModule { }
