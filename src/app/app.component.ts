import { Component, OnInit } from '@angular/core';

import { TodoService } from "./todo.service";
import { Credentials } from './credentials';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDoAngular';
  logged_in = false

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.log("ngOnInit()")
    let credentials: Credentials = {email: 'DevinDow@gmail.com', password: 'password'};
    this.todoService.postLogin(credentials).subscribe((result: boolean) => this.logged_in = result);
  }

  log(text: string) {
    console.log(`* AppComponent.${text}`);
  }

}
