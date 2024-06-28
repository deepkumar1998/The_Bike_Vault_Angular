import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ReportsComponent } from './reports/reports.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {    path : '',redirectTo: '/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {    path : 'dashboard', component: DashboardComponent  ,canActivate:[authGuard] },
  {    path : 'vehicles', 
        loadChildren:()=>import('./vehicles/vehicles.module').then(m=>m.VehiclesModule) ,canActivate:[authGuard] 
},
  {    path : 'parameters', 
        loadChildren:()=>import('./parameters/parameters.module').then(m=>m.ParametersModule) ,canActivate:[authGuard] 
  },
  {    path : 'people', 
        loadChildren:()=>import('./people/people.module').then(m=>m.PeopleModule) ,canActivate:[authGuard] 
 },
  {    
        path : 'hrsettings',
        loadChildren:()=>import('./hr-settings/hr-settings.module').then(m=>m.HrSettingsModule) ,canActivate:[authGuard] 
  },
  {    
      path : 'accounts',
      loadChildren:()=> import('./accounts/accounts.module').then(m =>m.AccountsModule) ,canActivate:[authGuard] 

  },
  {   
    path : 'globals',
    loadChildren:()=>import('./globals/globals.module').then(m =>m.GlobalsModule) ,canActivate:[authGuard] 
  },
  {    path : 'reports',
      loadChildren:()=>import('./reports/reports.module').then(m=>m.ReportsModule) ,canActivate:[authGuard] 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
