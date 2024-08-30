import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
              label: 'Home',
              command: () => this.router.navigate(['/home']) 
            },
            {
              label: 'Super Deals'
            },
            {
              label: 'Recent Products'
            },
            {
              label: 'Company Policies'
            },
            {
              label: 'Popular Questions'
            }
        ]
    }
}
