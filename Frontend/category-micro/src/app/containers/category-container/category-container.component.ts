import { Component } from '@angular/core';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { AdsSliderComponent } from '../../components/ads-slider/ads-slider.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'mt-category-container',
  standalone: true,
  imports: [
    CategoryListComponent,
    AdsSliderComponent,
    AutoCompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './category-container.component.html',
  styleUrl: './category-container.component.scss',
})
export class CategoryContainerComponent {
  searchText: FormControl = new FormControl('');
  items: string[] = [];
  filteredItems: string[] = [];

  constructor() {}

  filterItem(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }
    this.filteredItems = filtered;
  }
}
