import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TaskForm } from "./components/task-form/task-form";
import { TaskItem } from "./components/task-item/task-item";
import { TaskListComponent } from './pages/task-list/task-list.component';
import { AboutComponent } from './pages/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TaskForm, TaskItem, TaskListComponent, AboutComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-todo-app');

}
