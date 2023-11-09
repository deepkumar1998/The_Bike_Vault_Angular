import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Country{
  constructor(
   public id:number,
   public code:string,
   public capital:string,
   public description:string,
   public nationality:string,
   public continent:string
  ){

  }
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [];
  
  constructor(private httpClient:HttpClient){

  }

  ngOnInit(): void {
    this.getCountries();
    
  }
  getCountries(){
    
    this.httpClient.get<any>('http://127.0.0.1:8080/country/view').subscribe(
            responce=>{
        console.log(responce);
        
       this.countries=responce
      }
    )
  }

}
