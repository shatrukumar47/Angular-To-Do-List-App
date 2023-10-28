import { Component } from '@angular/core';
import { Task } from '../model/task';
import { CRUDService } from '../service/crud.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  titleInput: string = "";
  descriptionInput: string = "";

  constructor(private crudService: CRUDService){}

  createTodo(){
    if(this.titleInput && this.descriptionInput){
      const newTask: Task = {
        id: Math.floor(Math.random()*999)+100,
        title: this.titleInput,
        description: this.descriptionInput,
        completed: false
      }

      this.crudService.addTodo(newTask);
      this.titleInput = "";
      this.descriptionInput = "";
    }
  }
}
