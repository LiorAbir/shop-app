import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  product!: Product;

  categories = {
    woman: [
      'woman',
      'dresses',
      'skirts',
      'tops',
      'jackets and coats',
      'pants',
      'pajamas',
    ],
    man: ['man', 'pants', 'jackets and coats', 'shirts', 'pajamas'],
    girls: [
      'girls',
      'dresses',
      'skirts',
      'tops',
      'jackets and coats',
      'pants',
      'pajamas',
    ],
    boys: ['boys', 'pants', 'jackets and coats', 'shirts', 'pajamas'],
    accessories: ['accessories', 'shoes', 'bags', 'hats'],
    sale: ['sale'],
  };

  ngOnInit(): void {
    this.route.data.subscribe(({ product }) => {
      this.product =
        product || (this.productService.getEmptyProduct() as Product);
    });
  }

  async onSaveProduct() {
    console.log(this.product);

    // await lastValueFrom(this.productService.save({ ...this.product }));
    // this.router.navigateByUrl('/');
  }

  handleColorName(value: any) {
    console.log(value);
  }
}
