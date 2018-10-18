import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
