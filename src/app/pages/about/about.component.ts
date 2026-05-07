import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {

  title = 'About This App';

  features = [
    'Add new tasks easily',
    'Mark tasks as completed',
    'Delete tasks when done',
    'Search and filter tasks'
  ];

  purpose =
    'The goal of this project is to practice Angular fundamentals like components, services, data binding, and filtering while building a useful productivity app.';

}