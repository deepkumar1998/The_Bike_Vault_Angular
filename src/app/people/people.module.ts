import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { ClientComponent } from './client/client.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeeComponent,
    ClientComponent,
    SuppliersComponent,
    ContactsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class PeopleModule { }
