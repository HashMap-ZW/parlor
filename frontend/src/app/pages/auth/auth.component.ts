import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../tools/services';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  authService = inject(AuthService);

  ngOnInit(): void { }

  submit(){
    this.authService.goToRoute('admin/dashboard');
  }

}
