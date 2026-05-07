import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.html',
  styleUrls: ['./task-item.css']
})
export class TaskItem {

  @Input() task: any;
  @Input() index!: number;
  @Output() taskCompleted = new EventEmitter<void>();
  @Output() taskDeleted = new EventEmitter<void>();

  isEditing = false;
  editedTitle = '';

  constructor(private taskService: Task) {}

  // Toggle checkbox — emits event if completed
  toggle(): void {
    this.taskService.toggleTask(this.index);
    if (this.task.completed) {
      this.taskCompleted.emit();
    }
  }

  // Delete task
  delete(): void {
    this.taskService.deleteTask(this.index);
    this.taskDeleted.emit();
  }

  // Start editing
  startEdit(): void {
    this.isEditing = true;
    this.editedTitle = this.task.title;
  }

  // Save edited task
  saveEdit(): void {
    if (!this.editedTitle.trim()) return;
    this.taskService.updateTask(this.index, {
      ...this.task,
      title: this.editedTitle
    });
    this.isEditing = false;
  }

  // Cancel editing
  cancelEdit(): void {
    this.isEditing = false;
  }

  //for repeating daily tasks
  toggleRepeat(): void {
  this.task.repeatDaily = !this.task.repeatDaily;
  this.taskService.save();
}
}