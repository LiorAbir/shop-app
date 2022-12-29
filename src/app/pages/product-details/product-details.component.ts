import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  product!: Product;
  subscription!: Subscription;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);

      this.product = data['product'];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
