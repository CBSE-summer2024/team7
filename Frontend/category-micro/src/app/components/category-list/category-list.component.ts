import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'mt-category-list',
  standalone: true,
  imports: [CommonModule, MegaMenuModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Men',
        icon: 'pi pi-user',
        items: [
          [
            {
              label: 'Clothing',
              items: [
                { label: 'T-Shirts' },
                { label: 'Jeans' },
                { label: 'Shirts' },
                { label: 'Jackets' },
                { label: 'Suits' },
              ],
            },
          ],
          [
            {
              label: 'Accessories',
              items: [
                { label: 'Belts' },
                { label: 'Hats' },
                { label: 'Watches' },
              ],
            },
            {
              label: 'Footwear',
              items: [
                { label: 'Sneakers' },
                { label: 'Boots' },
                { label: 'Sandals' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Women',
        icon: 'pi pi-heart-fill',
        items: [
          [
            {
              label: 'Clothing',
              items: [
                { label: 'Dresses' },
                { label: 'Tops' },
                { label: 'Skirts' },
                { label: 'Jeans' },
                { label: 'Coats' },
              ],
            },
          ],
          [
            {
              label: 'Accessories',
              items: [
                { label: 'Jewelry' },
                { label: 'Handbags' },
                { label: 'Scarves' },
              ],
            },
            {
              label: 'Footwear',
              items: [
                { label: 'Heels' },
                { label: 'Flats' },
                { label: 'Sneakers' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Kids',
        icon: 'pi pi-face-smile',
        items: [
          [
            {
              label: 'Boys',
              items: [
                { label: 'T-Shirts' },
                { label: 'Shorts' },
                { label: 'Jeans' },
                { label: 'Jackets' },
              ],
            },
          ],
          [
            {
              label: 'Girls',
              items: [
                { label: 'Dresses' },
                { label: 'Tops' },
                { label: 'Leggings' },
                { label: 'Jackets' },
              ],
            },
          ],
          [
            {
              label: 'Accessories',
              items: [
                { label: 'Backpacks' },
                { label: 'Hats' },
                { label: 'Shoes' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Sale',
        icon: 'pi pi-tag',
        items: [
          [
            {
              label: 'Men\'s Sale',
              items: [
                { label: 'T-Shirts' },
                { label: 'Jeans' },
                { label: 'Jackets' },
                { label: 'Footwear' },
              ],
            },
          ],
          [
            {
              label: 'Women\'s Sale',
              items: [
                { label: 'Dresses' },
                { label: 'Tops' },
                { label: 'Handbags' },
                { label: 'Footwear' },
              ],
            },
          ],
          [
            {
              label: 'Kids\' Sale',
              items: [
                { label: 'Clothing' },
                { label: 'Accessories' },
                { label: 'Footwear' },
              ],
            },
          ],
        ],
      },
      {
        label: 'New Arrivals',
        icon: 'pi pi-star',
        items: [
          [
            {
              label: 'Men\'s New Arrivals',
              items: [
                { label: 'T-Shirts' },
                { label: 'Jeans' },
                { label: 'Footwear' },
              ],
            },
          ],
          [
            {
              label: 'Women\'s New Arrivals',
              items: [
                { label: 'Dresses' },
                { label: 'Tops' },
                { label: 'Handbags' },
              ],
            },
          ],
          [
            {
              label: 'Kids\' New Arrivals',
              items: [
                { label: 'Clothing' },
                { label: 'Accessories' },
                { label: 'Footwear' },
              ],
            },
          ],
        ],
      },
    ];    
  }
}
