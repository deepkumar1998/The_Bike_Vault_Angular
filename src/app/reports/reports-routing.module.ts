import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleReportsComponent } from './vehicle-reports/vehicle-reports.component';
import { AccountsReportsComponent } from './accounts-reports/accounts-reports.component';
import { EmployeeReportsComponent } from './employee-reports/employee-reports.component';

const routes: Routes = [
  {
    path:'vehicleReports',
    component:VehicleReportsComponent
  },
  {
    path:'accountsReports',
    component:AccountsReportsComponent
  },
  {
    path:'employeeReports',
    component:EmployeeReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
