import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mothersparticular',
  templateUrl: './mothersparticular.component.html',
  styleUrls: ['./mothersparticular.component.css']
})
export class MothersparticularComponent implements OnInit {

  onSubmit(value:any){
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
