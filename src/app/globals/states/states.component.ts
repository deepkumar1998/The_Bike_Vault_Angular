import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css'],
})
export class StatesComponent implements OnInit {

  countryid:number;
  countries:any[];

  constructor(private httpClient:HttpClient){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadCountry(){
    this.httpClient.get('http://127.0.0.1:8080/country/view').subscribe((result: any)=>{
      this.countries=result.states
    }

    )

  }

  
}
