import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrSettingsRoutingModule } from './hr-settings-routing.module';
import { JobTitlesComponent } from './job-titles/job-titles.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobTitlesComponent,
    EmployeeTypeComponent
  ],
  imports: [
    CommonModule,
    HrSettingsRoutingModule,
    ReactiveFormsModule
  ]
})
export class HrSettingsModule { }
