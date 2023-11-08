import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { VehicleReportsComponent } from './vehicle-reports/vehicle-reports.component';
import { EmployeeReportsComponent } from './employee-reports/employee-reports.component';
import { AccountsReportsComponent } from './accounts-reports/accounts-reports.component';


@NgModule({
  declarations: [
    VehicleReportsComponent,
    EmployeeReportsComponent,
    AccountsReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
