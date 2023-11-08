import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {    path : '',redirectTo: 'dashboard',pathMatch:'full'},
  {    path : 'dashboard', component: DashboardComponent },
  {    path : 'vehicles', 
        loadChildren:()=>import('./vehicles/vehicles.module').then(m=>m.VehiclesModule)  
},
  {    path : 'parameters', 
        loadChildren:()=>import('./parameters/parameters.module').then(m=>m.ParametersModule)
  },
  {    path : 'people', 
        loadChildren:()=>import('./people/people.module').then(m=>m.PeopleModule)
 },
  {    
        path : 'hrsettings',
        loadChildren:()=>import('./hr-settings/hr-settings.module').then(m=>m.HrSettingsModule)
  },
  {    
      path : 'accounts',
      loadChildren:()=> import('./accounts/accounts.module').then(m =>m.AccountsModule)

  },
  {   
    path : 'globals',
    loadChildren:()=>import('./globals/globals.module').then(m =>m.GlobalsModule) 
  },
  {    path : 'reports',
      loadChildren:()=>import('./reports/reports.module').then(m=>m.ReportsModule)  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
