import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'product-app',
  templateUrl: './product-app.component.html',
  styleUrls: ['./product-app.component.scss'],
})
export class ProductAppComponent implements OnInit {
  constructor(private productService: ProductService) {}

  // products!: Product[];
  products$!: Observable<Product[]>;
  subscription!: Subscription;

  ngOnInit(): void {
    this.productService.query();
    this.products$ = this.productService.products$;
  }
}
