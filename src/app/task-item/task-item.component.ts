import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/task';
import { CRUDService } from '../service/crud.service';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() todoItem: Task = {
    id: 1,
    title: '',
    description: '',
    completed: false,
  };

  @Output() completeToggle = new EventEmitter<number>();
  @Output() deleteTodo  = new EventEmitter<number>();

  constructor(private crudServices: CRUDService){}

  onCompleteToggle() {
    this.completeToggle.emit(this.todoItem.id)
  }

  onDeleteTodo() {
    this.deleteTodo.emit(this.todoItem.id);
  }
}
