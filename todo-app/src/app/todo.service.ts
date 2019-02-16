import { Injectable } from '@angular/core';
import { AppModule } from './app.module';

@Injectable({
  providedIn: 'root'
  // providedIn: AppModule
})
export class TodoService {

  todos = [];

  constructor() { }

  add(value: string, ...rest) {
    if (value === '') {
      return;
    }

    // Create new array, does not modify todos
    this.todos = [
      ...this.todos,
      {
        title: value,
        completed: false
      }
    ];
  }

  remove(index: number) {
    // Bad practice, because splice is not a pure function
    // this.todos.splice(index, 1);

    // Create new array, does not modify todos
    this.todos = [...this.todos.slice(0, index),
                  ...this.todos.slice(index + 1)];
    console.log('Delete todo at index: ' + index);
  }

  toggleCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
