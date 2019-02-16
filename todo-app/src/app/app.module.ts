import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEntityComponent } from './todo-entity/todo-entity.component';
import { TodoService } from './todo.service';
import { LineThroughDirective } from './line-through.directive';

@NgModule({
  // Components and directives
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoEntityComponent,
    LineThroughDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
