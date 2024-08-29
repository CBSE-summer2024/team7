import { Component } from '@angular/core';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { AdsSliderComponent } from '../../components/ads-slider/ads-slider.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'mt-category-container',
  standalone: true,
  imports: [CategoryListComponent, AdsSliderComponent, AutoCompleteModule],
  templateUrl: './category-container.component.html',
  styleUrl: './category-container.component.scss'
})
export class CategoryContainerComponent {
  
}
