import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './payments-list.component.html',
  styleUrl: './payments-list.component.scss',
})
export class PaymentsListComponent implements OnInit {

  ngOnInit(): void { }

}
