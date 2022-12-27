import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../product-service/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<Observable<Product | void>> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id'];
    return this.productService.getById(id);
  }
}
