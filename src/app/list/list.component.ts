import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';

import { fetchTasks } from '../../assets/javascript/apis.js'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  tasks: {}
  
  constructor() { }

  ngOnInit() {
    this.setTasks = this.setTasks.bind(this);

    console.log("*** ListComponent.ngOnInit() " + this.list.id)

    fetchTasks(this.list.id, this.setTasks)
  }

  setTasks(tasks) {
    this.tasks = tasks
    console.log("*** setTasks()")
    console.log(this.tasks)
  }

}
