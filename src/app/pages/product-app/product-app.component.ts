import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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

  products$!: Observable<Product[]>;
  subscription!: Subscription;

  ngOnInit(): void {
    this.productService.query();
    this.products$ = this.productService.products$;

    // console.log(this.route.data.subscribe( date => {
    //   console.log(data);

    // }));

    this.route.params.subscribe(async (params) => {
      console.log(params);
    });
  }
}
