import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

//MODELS
import { Product } from '../../models/product.model';
import { ProductFilter } from 'src/app/models/product-filter.model';

const PRODUCTS = [
  {
    _id: 'P101',
    name: 'Top',
    price: 40.0,
    desc: 'top shirt',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    isInSale: false,
    salePrice: 0,
    category: { woman: 'tops' },
  },
  {
    _id: 'P102',
    name: 'Top',
    price: 40.0,
    desc: 'top shirt',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    isInSale: false,
    salePrice: 0,
    category: { woman: 'tops' },
  },
  {
    _id: 'P103',
    name: 'Top',
    price: 40.0,
    desc: 'top shirt',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    isInSale: false,
    salePrice: 0,
    category: { woman: 'tops' },
  },
  {
    _id: 'P104',
    name: 'Top',
    price: 40.0,
    desc: 'top shirt',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    isInSale: false,
    salePrice: 0,
    category: { woman: 'tops' },
  },
  {
    _id: 'P105',
    name: 'Top',
    price: 40.0,
    desc: 'top shirt',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    isInSale: false,
    salePrice: 0,
    category: { woman: 'tops' },
  },
  {
    _id: 'P106',
    name: 'Top',
    price: 40.0,
    desc: 'top shirt',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    isInSale: false,
    salePrice: 0,
    category: { woman: 'tops' },
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  private _productsDb: Product[] = PRODUCTS;

  //products
  private _products$ = new BehaviorSubject<Product[]>([]);
  public products$ = this._products$.asObservable();

  //filter
  private _filterBy$ = new BehaviorSubject<ProductFilter>({
    term: '',
    mainCategory: '',
    subcategory: 'tops',
  });
  public filterBy$ = this._filterBy$.asObservable();

  public query() {
    const filterBy = this._filterBy$.getValue();

    //search
    let products = this._productsDb.filter((product) => {
      return product.name.toLowerCase().includes(filterBy.term.toLowerCase());
    });

    //main categoty
    // products = this._productsDb.filter((product) => {
    //   return Object.keys(product.category).includes(filterBy.mainCategory);
    // });
    products.map((product) => {
      const ans = Object.keys(product.category).includes(filterBy.mainCategory);
      // console.log(filterBy.mainCategory);

      // console.log(product, ans);
    });

    //subcategory
    // products = this._productsDb.filter((product) => {
    //   return product.category[filterBy.mainCategory] === filterBy.subcategory;
    // });
    products.map((product) => {
      const { mainCategory } = filterBy;
      // console.log(filterBy.subcategory);

      const ans =
        (product.category as any)[mainCategory] === filterBy.subcategory;
      // console.log(ans, product.category[filterBy.mainCategory]);

      // console.log(filterBy.mainCategory);

      // console.log(product, ans);
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

  public setFilterBy(filterBy: ProductFilter) {
    this._filterBy$.next(filterBy);
    this.query();
  }

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
