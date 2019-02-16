import { Component, ViewChild, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { TodoService } from './todo.service';

// Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  todos: any[] = [];

  constructor(private todoService: TodoService) {
    this.todos = todoService.todos;
  }

  ngDoCheck(): void {
    this.todos = this.todoService.todos;
  }

  addHandler(value: string) {
    this.todoService.add(value);
  }

  deleteTodo(index) {
    this.todoService.remove(index);
  }

  toggleTodo(index) {
    this.todoService.toggleCompleted(index);
  }
}
