import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';

import { TodoService } from "../todo.service";
import { fetchTasks } from '../../assets/javascript/apis.js'

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
    this.setTasks = this.setTasks.bind(this);

    console.log(`*** ListComponent.ngOnInit() #${this.list.id} => ${this.list.name}`)

    this.todoService.fetchLists().subscribe(tasks => this.setTasks(tasks));
  }

  setTasks(tasks) {
    this.tasks = tasks
    console.log("*** setTasks()")
    console.log(this.tasks)
  }

}
