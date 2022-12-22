import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductAppComponent } from './pages/product-app/product-app.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

//CMPS

const routes: Routes = [
  {
    path: 'pruduct/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'product/:mainCategory/:subCategory',
    component: ProductAppComponent,
  },
  {
    path: 'product/:mainCategory',
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
