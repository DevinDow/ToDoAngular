import { Component, OnInit } from '@angular/core';

import { TodoService } from "../todo.service";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: {}

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.log("ngOnInit()")
    this.setLists = this.setLists.bind(this);
    this.todoService.fetchLists().subscribe(lists => this.setLists(lists));
  }

  setLists(lists) {
    this.log("setLists()")
    console.log(lists)
    this.lists = lists
  }

  log(text: string) {
    console.log(`* ListsComponent.${text}`);
  }

}
