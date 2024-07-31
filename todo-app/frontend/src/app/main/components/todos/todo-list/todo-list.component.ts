import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
})
export class TodoListComponent {
  @Input() items: Todo[] = [];

  @Output() editTodo = new EventEmitter<Todo>();

  @Output() deleteTodo = new EventEmitter<number>();

  constructor() {}
}
