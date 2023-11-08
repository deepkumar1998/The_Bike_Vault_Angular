import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobTitlesComponent } from './job-titles/job-titles.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';

const routes: Routes = [
  {
    path:'jobTitles',
    component:JobTitlesComponent
  },
  {
    path:'employeeType',
    component:EmployeeTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrSettingsRoutingModule { }
