import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesDataComponent } from './vehicles-data/vehicles-data.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MovementsComponent } from './movements/movements.component';
import { HiresComponent } from './hires/hires.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    VehiclesDataComponent,
    MaintenanceComponent,
    MovementsComponent,
    HiresComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,FormsModule,NgbModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class VehiclesModule { }
