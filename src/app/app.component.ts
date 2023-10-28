import { Component } from '@angular/core';
import { CRUDService } from './service/crud.service';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'To-Do-List';
  constructor(private crudService: CRUDService) {}

  get todos(): Task[] {
    return this.crudService.getTodos();
  }
}
