import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

//MODELS
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private _productsDb: Product[] = [
    {
      _id: 'P101',
      name: 'Top',
      price: 40.0,
      desc: 'top shirt',
      colors: [
        {
          browm: [
            'https://tamnoon.com/wp-content/uploads/2022/10/11217071_1.jpg',
            'https://tamnoon.com/wp-content/uploads/2022/10/11217071_2.jpg',
          ],
        },
      ],
      sizes: ['1', '2', '3', '4'],
      isInSale: false,
      salePrice: 0,
      labels: { Woman: 'Tops' },
    },
  ];

  private _products$ = new BehaviorSubject<Product[]>([]);
  public products$ = this._products$.asObservable();

  public query() {
    const filterBy = { term: '' };
    const products = this._productsDb.filter((product) => {
      return product.name.toLowerCase().includes(filterBy.term.toLowerCase());
    });
    this._products$.next(products);
  }

  public getEmptyProduct() {
    return {
      name: '',
      price: 0,
      desc: '',
      colors: [{}],
      sizes: [],
      isInSale: false,
      salePrice: 0,
      labels: {},
    };
  }

  public remove(productId: string) {
    const products = this._productsDb;
    const productIdx = products.findIndex(
      (product) => product._id === productId
    );
    products.splice(productIdx, 1);
    this._products$.next(products);
    return of({});
  }

  public getById(productId: string): Observable<Product | void> {
    const product = this._productsDb.find(
      (product) => product._id === productId
    );
    if (product) return of({ ...product });
    return of();
  }

  public save(product: Product) {
    return product._id ? this._edit(product) : this._add(product);
  }

  public setFilterBy() {}

  private _add(product: Product) {
    product._id = this._makeId();
    this._productsDb.push(product);
    this._products$.next(this._productsDb);
    return of(product);
  }

  private _edit(product: Product) {
    const products = this._productsDb;
    const productIdx = products.findIndex(
      (_product) => _product._id === product._id
    );
    products.splice(productIdx, 1, product);
    this._products$.next(products);
    return of(product);
  }

  private _makeId(length = 5) {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
