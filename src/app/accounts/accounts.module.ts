import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceStatusComponent } from './invoice-status/invoice-status.component';


@NgModule({
  declarations: [
    AccountsComponent,
    InvoiceComponent,
    InvoiceStatusComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
