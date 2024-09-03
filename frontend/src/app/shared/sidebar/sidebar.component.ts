import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {

  private router = inject(Router)


  navLinks = [
    {
      name: 'Dashboard',
      link: 'dashboard',
      icon: 'nav-icon fas fa-tachometer-alt',
    },
    {
      name: 'Policies',
      link: 'policies',
      icon: 'nav-icon fas fa-handshake',
    },
    {
      name: 'Clients',
      link: 'clients',
      icon: 'nav-icon fas fa-users',
    },

    {
      name: 'Payments',
      link: 'payments',
      icon: 'nav-icon fas fa-calculator',
    },

    {
      name: 'Inventory',
      link: 'inventory',
      icon: 'nav-icon fas fa-columns',
    },
    {
      name: 'Users',
      link: 'users',
      icon: 'nav-icon far fa-user',
    },
  ];

  ngOnInit(): void {}

  activeTab(route: any): boolean {
    return `/admin/${route}` === this.router.url;
  }
}
