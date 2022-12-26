import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductFilter } from 'src/app/models/product-filter.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'product-app',
  templateUrl: './product-app.component.html',
  styleUrls: ['./product-app.component.scss'],
})
export class ProductAppComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  subscription!: Subscription;
  products$!: Observable<Product[]>;
  filterBy!: ProductFilter;

  ngOnInit(): void {
    this.productService.query();
    this.products$ = this.productService.products$;

    this.productService.filterBy$.subscribe((filterBy) => {
      this.filterBy = filterBy;
    });

    this.route.params.subscribe(async (params) => {
      const main = (this.filterBy.mainCategory = params['mainCategory']
        ? params['mainCategory']
        : '');
      this.filterBy.subCategory = params['subCategory']
        ? params['subCategory']
        : '';

      this.productService.setFilterBy(this.filterBy);
    });
  }
}
