import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fathersparticular',
  templateUrl: './fathersparticular.component.html',
  styleUrls: ['./fathersparticular.component.css']
})
export class FathersparticularComponent implements OnInit {
  onSubmit(value:any){
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
