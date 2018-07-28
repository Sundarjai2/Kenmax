import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  public studentDetail:any=[];

  constructor(private _StdService:StudentService) { }
  ngOnInit() {
    this._StdService.getStdDetails()
    .subscribe(data => this.studentDetail=data);
  }
  

}
