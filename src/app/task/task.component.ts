import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
    this.log(`ngOnInit() => ${this.task.priority} ${this.task.name}`)
  }

  log(text: string) {
    console.log(`* TaskComponent#${this.task.id}.${text}`);
  }

}
