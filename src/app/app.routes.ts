import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'browse',
    loadComponent: () =>
      import('./pages/browse/browse.component').then((m) => m.BrowseComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then((m) => m.AdminComponent),
  },
  {
    path: 'admin/submit',
    loadComponent: () =>
      import('./pages/admin/submit-project/submit-project.component').then(
        (m) => m.SubmitProjectComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
