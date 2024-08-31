import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  navLinks = [
    {
      name: 'Dashboard',
      link: 'dashboard',
    },
    {
      name: 'Policies',
      link: 'policies',
    },
    {
      name: 'Clients',
      link: 'clients',
    },

    {
      name: 'Payments',
      link: 'payments',
    },

    {
      name: 'Inventory',
      link: 'inventory',
    },
    {
      name: 'Users',
      link: 'users',
    },
  ];

  ngOnInit(): void {}
}
