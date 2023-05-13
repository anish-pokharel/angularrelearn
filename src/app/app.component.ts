import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'relearn';
  constructor() { }

  ngOnInit() {

  }


  // calling it with method and passing the myForm as Parameters
  submitHandler(myForm: any) {
    console.log(myForm)
  }

}


