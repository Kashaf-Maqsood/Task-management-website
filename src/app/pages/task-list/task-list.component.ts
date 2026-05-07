import { Component } from '@angular/core';
import { Task } from '../../services/task';
import { TaskItem } from '../../components/task-item/task-item';
import { TaskForm } from '../../components/task-form/task-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskForm, TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent {
  searchText = '';
  toastMessage = '';
  toastType = '';
  reportData: any = null;

  instructions = [
    { icon: '✏️', text: 'Type a task and click Add to get started' },
    { icon: '✅', text: 'Click the checkbox to mark a task as done' },
    { icon: '🗑️', text: 'Click delete to remove a task' },
    { icon: '🔍', text: 'Use the search bar to filter your tasks' },
    { icon: '📊', text: 'Check reports below for your progress' },
  ];

  constructor(public taskService: Task) {
  this.taskService.resetDailyTasks();
}

  updateSearch(text: string) {
    this.searchText = text;
  }

  getFilteredTasks() {
    return this.taskService.tasks.filter(task =>
      task.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  totalTasks() { return this.taskService.tasks.length; }
  completedTasks() { return this.taskService.tasks.filter(t => t.completed).length; }
  pendingTasks() { return this.taskService.tasks.filter(t => !t.completed).length; }

  onTaskCompleted() {
    this.showToast('✅ Task marked as completed!', 'toast-success');
  }

  onTaskDeleted() {
    this.showToast('🗑️ Task deleted!', 'toast-error');
  }

  showToast(message: string, type: string) {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = '';
      this.toastType = '';
    }, 3000);
  }

  showReport(type: 'daily' | 'weekly') {
    const total = this.totalTasks();
    const completed = this.completedTasks();
    const pending = this.pendingTasks();
    const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

    this.reportData = {
      title:  '📅 Daily Report' ,
      total,
      completed,
      pending,
      rate
    };
  }
}