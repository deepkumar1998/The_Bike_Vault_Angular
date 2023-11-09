import { Component, OnInit } from '@angular/core';
import { InvoiceStatus } from '../accounts.component';
import { Client } from 'src/app/people/client/client.component';
import { HttpClient } from '@angular/common/http';

export class Invoice {
  constructor(
  id: number,
  date: Date,
  invoiceStatus: InvoiceStatus,
  invoicestatusid:number,
  client: Client,
  clientid:number,
  remarks:String
  ){
      
  }

}



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {

  // invoices: Invoice[]=[];
  constructor(){ }

  // constructor(private httpClient:HttpClient){

  // }


 ngOnInit(): void {
    // this.getInvoice();
  }

  // getInvoice(){
  //   this.httpClient.get<any>('http://127.0.0.1:8080/invoice/view').subscribe(
  //     responce =>{
  //       console.log(responce);
        
  //       this.invoices=responce;
  //     }
  //   )
  // }

  


}
