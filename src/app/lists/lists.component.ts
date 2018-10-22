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
    this.setLists = this.setLists.bind(this);

    console.log("*** ListsComponent.ngOnInit()")

    this.todoService.fetchLists().subscribe(lists => this.setLists(lists));
  }

  setLists(lists) {
    this.lists = lists
    console.log("*** setLists()")
    console.log(this.lists)
  }

}
