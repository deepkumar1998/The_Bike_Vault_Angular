import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrSettingsRoutingModule } from './hr-settings-routing.module';
import { JobTitlesComponent } from './job-titles/job-titles.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';


@NgModule({
  declarations: [
    JobTitlesComponent,
    EmployeeTypeComponent
  ],
  imports: [
    CommonModule,
    HrSettingsRoutingModule
  ]
})
export class HrSettingsModule { }
