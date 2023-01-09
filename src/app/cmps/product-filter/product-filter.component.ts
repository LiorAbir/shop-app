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
      'dresses',
      'skirts',
      'tops',
      'jackets and coats',
      'pants',
      'pajamas',
    ],
    man: ['pants', 'jackets and coats', 'shirts', 'pajamas'],
    girls: [
      'dresses',
      'skirts',
      'tops',
      'jackets and coats',
      'pants',
      'pajamas',
    ],
    boys: ['pants', 'jackets and coats', 'shirts', 'pajamas'],
    accessories: ['shoes', 'bags', 'hats'],
    sale: [],
  };

  ngOnInit(): void {
    // this.subscription = this.productService.filterBy$.subscribe((filterBy) => {
    //   this.filterBy = filterBy;
    // });
  }

  onChangeFilter() {
    // this.productService.setFilterBy(this.filterBy);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
