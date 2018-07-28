import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })




export class StudentService {
  private baseUrl = 'http://192.168.0.10:5000/';

  constructor(private http: HttpClient) { }
  getStdDetails(value){
    
  }
  addStudents (value): Observable<any> {
    return this.http.post<any>(this.baseUrl +'registation_first_form', value, httpOptions);
  }
}
