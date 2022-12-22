import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductFilter } from 'src/app/models/product-filter.model';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  filterBy!: ProductFilter;
  subscription!: Subscription;

  categories = {
    woman: [
      'Woman',
      'dresses',
      'Skirts',
      'Tops',
      'Jackets and coats',
      'Pants',
      'Pajamas',
    ],
    man: ['Man', 'Pants', 'Jackets and coats', 'Shirts', 'Pajamas'],
    girls: [
      'Girls',
      'Dresses',
      'Skirts',
      'Tops',
      'Jackets and coats',
      'Pants',
      'Pajamas',
    ],
    boys: ['Boys', 'Pants', 'Jackets and coats', 'Shirts', 'Pajamas'],
    accessories: ['Accessories', 'Shoes', 'Bags', 'Hats'],
    sale: ['Sale'],
  };

  ngOnInit(): void {
    this.subscription = this.productService.filterBy$.subscribe((filterBy) => {
      this.filterBy = filterBy;
    });
  }

  onChangeFilter() {
    this.productService.setFilterBy(this.filterBy);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
