import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  routerLinks = [
    {
      name: 'Dashboard',
      link: ' ',
    },
    {
      name: 'Payments',
      link: 'payments',
    },
    {
      name: 'Users',
      link: 'users',
    },
  ];

  ngOnInit(): void {}
}
