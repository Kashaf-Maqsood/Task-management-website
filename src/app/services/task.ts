import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Task {

  private platformId = inject(PLATFORM_ID);

  tasks: any[] = [];

  constructor() {
    this.load();
  }

  
  addTask(title: string) {
  this.tasks.push({
    title,
    completed: false,
    repeatDaily: false,
    createdAt: new Date()
  });
  this.save();
}

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.save();
  }

  updateTask(index: number, updatedTask: any) {
    this.tasks[index] = updatedTask;
    this.save();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.save();
  }

  resetDailyTasks() {
  const today = new Date().toDateString();
  this.tasks.forEach(task => {
    if (task.repeatDaily) {
      const taskDate = new Date(task.createdAt).toDateString();
      if (taskDate !== today) {
        task.completed = false;
        task.createdAt = new Date();
      }
    }
  });
  this.save();
}

  save() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  load() {
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem('tasks');
      this.tasks = data ? JSON.parse(data) : [];   
    }
  }
}
