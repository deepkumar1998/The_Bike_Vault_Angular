import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesDataComponent } from './vehicles-data/vehicles-data.component';
import { VehiclesComponent } from './vehicles.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MovementsComponent } from './movements/movements.component';
import { HiresComponent } from './hires/hires.component';

const routes: Routes = [
  {
    path:'data',
    component:VehiclesDataComponent
  },
  {
    path:'maintenance',
    component:MaintenanceComponent
  },
  // {
  //   path:'movements',
  //   component:MovementsComponent
  // },
  {
    path:'hires',
    component:HiresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
