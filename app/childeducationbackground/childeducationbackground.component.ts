import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childeducationbackground',
  templateUrl: './childeducationbackground.component.html',
  styleUrls: ['./childeducationbackground.component.css']
})
export class ChildeducationbackgroundComponent implements OnInit {
  onSubmit(value:any){
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
