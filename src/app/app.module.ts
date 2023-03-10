import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ProductAppComponent } from './pages/product-app/product-app.component';
import { ProductListComponent } from './cmps/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPreviewComponent } from './cmps/product-preview/product-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { SocialsComponent } from './cmps/socials/socials.component';
import { ProductFilterComponent } from './cmps/product-filter/product-filter.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { FormsModule } from '@angular/forms';
import { AddImgComponent } from './cmps/add-img/add-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductAppComponent,
    ProductListComponent,
    ProductPreviewComponent,
    AppHeaderComponent,
    AppFooterComponent,
    SocialsComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    AddImgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
