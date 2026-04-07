import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { masteryGuard } from './guards/mastery.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'topic/:id',
    loadComponent: () =>
      import('./pages/topic-detail/topic-detail.component').then(
        (m) => m.TopicDetailComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'certificate/:topicId',
    loadComponent: () =>
      import('./pages/certificate/certificate.component').then(
        (m) => m.CertificateComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'teacher-dashboard',
    loadComponent: () =>
      import('./pages/teacher-dashboard/teacher-dashboard.component').then(
        (m) => m.TeacherDashboardComponent
      ),
    canActivate: [authGuard],
  },
];
