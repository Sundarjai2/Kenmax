import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
// import { StudentService } from '../student.service';

@Component({
  selector: 'app-std-reg',
  templateUrl: './std-reg.component.html',
  styleUrls: ['./std-reg.component.css']
})
export class StdRegComponent implements OnInit {
 
  resultData = [];

  constructor(private http: HttpClient) { }
  onSubmit(value:any){
    console.log(value)
    return this.http.post<any>('http://192.168.0.10:5000/registation_first_form', value, httpOptions);
    // this.studentService.addStudents(value).subscribe(data => this.resultData.push(data));
    //this.studentService.addStudents(value).subscribe(data)
  }
  ngOnInit() {
  }

}
