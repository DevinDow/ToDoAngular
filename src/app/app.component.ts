import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { login } from '../assets/javascript/apis.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDoAngular';
  logged_in = false

  ngOnInit() {
    this.onLoggedIn = this.onLoggedIn.bind(this);

    console.log("*** AppComponent.ngOnInit()")

    login('DevinDow@gmail.com', 'password', this.onLoggedIn)
  }

  onLoggedIn() {
    console.log("*** AppComponent.onLoggedIn()")
    this.logged_in = true
  }

}
