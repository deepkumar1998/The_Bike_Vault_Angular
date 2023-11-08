import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceStatusComponent } from './invoice-status/invoice-status.component';

const routes: Routes = [
  {
  path :'invoice',
  component:InvoiceComponent
  },
  {
    path :'invoiceStatus',
    component:InvoiceStatusComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
