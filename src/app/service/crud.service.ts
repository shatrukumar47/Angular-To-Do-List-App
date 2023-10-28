import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  
  private todos: Task[] = [
    {
      id: 1,
      title: 'Learn Js',
      description: 'Attend the class tomorrow',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn CSS',
      description: 'Attend the class tomorrow',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn Angular',
      description: 'Attend the class tomorrow',
      completed: false,
    },
    {
      id: 4,
      title: 'Learn Typescript',
      description: 'Attend the class tomorrow',
      completed: false,
    },
  ];
  constructor() {
  }

  addTodo(todo: Task) {
    this.todos.unshift(todo);
  }

  getTodos(): Task[]{
    return this.todos;
  }

  changeStatus(todoID: number){
    let todo = this.todos.find((item)=> item.id === todoID);
    if(todo){
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(todoID: number){
    this.todos = this.todos.filter((item)=> item.id !== todoID)
  }
}
