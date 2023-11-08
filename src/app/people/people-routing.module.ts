import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ClientComponent } from './client/client.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'client',
    component:ClientComponent
  },
  {
    path:'suppliers',
    component:SuppliersComponent
  },
  {
    path:'contacts',
    component:ContactsComponent
  },
  {
    path:'users',
    component:UsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
