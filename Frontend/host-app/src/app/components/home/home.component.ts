import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('productsList', { read: ElementRef }) products!: ElementRef;
  @ViewChild('productsSlider', { read: ElementRef }) slider!: ElementRef;
  @ViewChild('categoryList', { read: ViewContainerRef }) categories!: ViewContainerRef;
  @ViewChild('warningAlerts', { read: ElementRef }) warningAlerts!: ElementRef;

  private remoteModulesConfig = [
    {
      remoteName: 'CategoriesComponent',
      exposedModule: './CategoriesList',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      target: 'categories',
      type: 'angular'
    },
    {
      remoteName: 'ProductsComponent',
      exposedModule: './ProductsList',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      target: 'products',
      type: 'customElement',
      elementTag: 'products-component'
    },
    {
      remoteName: 'ProductsComponent',
      exposedModule: './ProductsSlider',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      target: 'slider',
      type: 'customElement',
      elementTag: 'slider-component'
    },
    {
      remoteName: 'AlertsComponent',
      exposedModule: './WarningAlert',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      target: 'warningAlerts',
      type: 'customElement',
      elementTag: 'warning-alert'
    }
  ];

  async ngAfterViewInit(): Promise<void> {
    for (const config of this.remoteModulesConfig) {
      const module = await loadRemoteModule({
        remoteName: config.remoteName,
        exposedModule: config.exposedModule,
        remoteEntry: config.remoteEntry
      });            
      
      if (config.type === 'angular') {
        const containerRef = this[config.target as keyof HomeComponent] as ViewContainerRef;   
        containerRef.createComponent(module[Object.keys(module)[0]]);
      } else if (config.type === 'customElement' && config.elementTag) {
        const elementRef = this[config.target as keyof HomeComponent] as ElementRef;
        const customElement = document.createElement(config.elementTag);
        elementRef.nativeElement.appendChild(customElement);
      }
    }
  }
}
