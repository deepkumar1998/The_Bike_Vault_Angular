import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesDataComponent } from './vehicles-data/vehicles-data.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MovementsComponent } from './movements/movements.component';
import { HiresComponent } from './hires/hires.component';


@NgModule({
  declarations: [
    VehiclesDataComponent,
    MaintenanceComponent,
    MovementsComponent,
    HiresComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
