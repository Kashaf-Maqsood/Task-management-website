import { Routes } from '@angular/router';
import {TaskListComponent} from './pages/task-list/task-list.component';
import { AboutComponent } from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'about', component: AboutComponent }
];

