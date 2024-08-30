import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

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
        path:'users',
        component:UsersListComponent
      },
      {
        path:'payments',
        component:
      }
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  }
];
