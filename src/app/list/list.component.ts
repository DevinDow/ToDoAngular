import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from "../todo.service";
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  tasks: {}
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.log(`ngOnInit() => ${this.list.name}`)

    this.setTasks = this.setTasks.bind(this);

    this.todoService.fetchTasks(this.list.id).subscribe(tasks => this.setTasks(tasks));
  }

  setTasks(tasks) {
    this.log("setTasks()")
    console.log(tasks)
    this.tasks = tasks
  }

  log(text: string) {
    console.log(`* ListComponent#${this.list.id}.${text}`);
  }

}
