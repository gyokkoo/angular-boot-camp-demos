import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: any[];
  @Output() remove = new EventEmitter();
  @Output() toggle = new EventEmitter();

  constructor() {
  }

  handleRemove(index: number) {
    this.remove.emit(index);
  }

  handleToggle(index: number) {
    this.toggle.emit(index);
  }
}
