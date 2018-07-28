import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-allied-health-prof-invol',
  templateUrl: './medical-allied-health-prof-invol.component.html',
  styleUrls: ['./medical-allied-health-prof-invol.component.css']
})
export class MedicalAlliedHealthProfInvolComponent implements OnInit {
  onSubmit(value:any){
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
