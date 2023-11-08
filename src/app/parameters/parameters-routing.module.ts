import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleMakesComponent } from './vehicle-makes/vehicle-makes.component';
import { VehicleModelsComponent } from './vehicle-models/vehicle-models.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { StatusValueComponent } from './status-value/status-value.component';

const routes: Routes = [
  {
    path:'vehicleMakes',
    component:VehicleMakesComponent
  },
  {
    path:'vehicleModels',
    component:VehicleModelsComponent
  },
  {
    path:'vehicleTypes',
    component:VehicleTypesComponent
  },
  {
    path:'status',
    component:StatusValueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
