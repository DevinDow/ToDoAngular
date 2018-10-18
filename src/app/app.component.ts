import { Component, OnInit } from '@angular/core';

import { login } from '../assets/javascript/apis.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDoAngular';

  ngOnInit() {
    console.log("*** AppComponent.ngOnInit()")

    login('DevinDow@gmail.com', 'password')

  }

}
