import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "produtos",
    component: ProductsComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "",
        component: ProductComponent,
        canActivate: [authGuard],
      },
      {
        path: "detalhe/:id",
        component: DetailComponent,
        canActivate: [authGuard],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
