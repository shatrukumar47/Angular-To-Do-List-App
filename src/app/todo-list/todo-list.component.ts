import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { CRUDService } from '../service/crud.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(private crudService: CRUDService) {}
  get todos() {
    return this.crudService.getTodos();
  }

  onCompleteToggle(todoID: number){
    this.crudService.changeStatus(todoID);
  }

  onDeleteTodo(todoID: number){
    this.crudService.deleteTodo(todoID)
  }
}
