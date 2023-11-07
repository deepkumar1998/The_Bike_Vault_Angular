import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ParametersComponent } from './parameters/parameters.component';
import { PeopleComponent } from './people/people.component';
import { HrSettingsComponent } from './hr-settings/hr-settings.component';
import { AccountsComponent } from './accounts/accounts.component';
import { GlobalsComponent } from './globals/globals.component';
import { ReportsComponent } from './reports/reports.component'



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    VehiclesComponent,
    ParametersComponent,
    PeopleComponent,
    HrSettingsComponent,
    AccountsComponent,
    GlobalsComponent,
    ReportsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
