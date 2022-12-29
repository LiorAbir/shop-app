import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductAppComponent } from './pages/product-app/product-app.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductResolver } from './services/resolvers/product.resolver';

//CMPS

const routes: Routes = [
  {
    path: 'edit/:id',
    component: ProductEditComponent,
    resolve: { product: ProductResolver },
  },
  {
    path: 'edit',
    component: ProductEditComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    resolve: { product: ProductResolver },
  },
  {
    path: 'product-category/:mainCategory/:subCategory',
    component: ProductAppComponent,
  },
  {
    path: 'product-category/:mainCategory',
    component: ProductAppComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// /:category/:subcategory?
