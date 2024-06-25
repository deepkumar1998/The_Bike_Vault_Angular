import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url="http://127.0.0.1:8085/api/admin/country"
  constructor(private http:HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/view`).pipe(
      catchError(this.handleError<any[]>())
    );
  }

  add(fg: any): Observable<any> {
    return this.http.post(`${this.url}/add`, fg.value).pipe(
      catchError(this.handleError<any>())
    );
  }

  update(id: number, fg: FormGroup): Observable<any> {
    return this.http.put(`${this.url}/update/${id}`, fg.value).pipe(
      catchError(this.handleError<any>())
    );
  }
  delete(id:number){
    return this.http.delete(`${this.url}/delete/${id}`).pipe(
      catchError(this.handleError<any>())
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
