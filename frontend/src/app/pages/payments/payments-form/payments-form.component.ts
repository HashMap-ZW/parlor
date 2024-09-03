import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './payments-form.component.html',
  styleUrl: './payments-form.component.scss',
})
export class PaymentsFormComponent implements OnInit {

  ngOnInit(): void { }

}
