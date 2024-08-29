import { Component } from '@angular/core';
import { CategoryContainerComponent } from './containers/category-container/category-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoryContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'category-micro';
}
