import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { PaymentsListComponent } from './pages/payments/payments-list/payments-list.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: UsersListComponent,
      },
      {
        path: 'payments',
        component: PaymentsListComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];
