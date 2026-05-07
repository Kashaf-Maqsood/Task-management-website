import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Output } from '@angular/core';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  title = '';
  search = '';
  toastMessage = '';
  toastType = '';

  @Output() searchChange = new EventEmitter<string>();

  constructor(private taskService: Task) {}

  addTask() {
    if (!this.title.trim()) return;
    this.taskService.addTask(this.title);
    this.title = '';
    this.showToast('✅ Task added successfully!', 'toast-success');
  }

  showToast(message: string, type: string) {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = '';
      this.toastType = '';
    }, 3000);
  }

  onSearch() {
    this.searchChange.emit(this.search);
  }

  clearSearch() {
    this.search = '';
    this.searchChange.emit(this.search);
  }
}
