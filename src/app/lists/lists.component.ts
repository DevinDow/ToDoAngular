import { Component, OnInit } from '@angular/core';

import { fetchLists } from '../../assets/javascript/apis.js'

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: {}

  constructor() { }

  ngOnInit() {
    this.setLists = this.setLists.bind(this);

    console.log("*** ListsComponent.ngOnInit()")

    fetchLists(this.setLists)
  }

  setLists(lists) {
    this.lists = lists
    console.log("*** setLists()")
    console.log(this.lists)
  }

}
