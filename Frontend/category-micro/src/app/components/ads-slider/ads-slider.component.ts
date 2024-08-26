import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'mt-ads-slider',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
  ],
  templateUrl: './ads-slider.component.html',
  styleUrl: './ads-slider.component.scss',
})
export class AdsSliderComponent {
  ads: string[] = ['/imgs/ad-1.png', '/imgs/ad-2.png', '/imgs/ad-3.png'];

  ngOnInit() {
  }
}
