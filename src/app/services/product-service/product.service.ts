import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

//MODELS
import { Product } from '../../models/product.model';
import { ProductFilter } from 'src/app/models/product-filter.model';

const PRODUCTS = [
  {
    _id: 'P101',
    name: 'Dress',
    price: 40.0,
    desc: 'top shirt',
    img: 'https://images.unsplash.com/photo-1639926784543-d6777b39dceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=570&q=80',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: [1, 2, 3, 4],
    saleInfo: {
      isInSale: false,
      salePrice: 0,
      saleType: '',
    },
    category: { woman: ['dresses'] },
  },
  {
    _id: 'P102',
    name: 'Coat',
    price: 40.0,
    desc: 'top shirt',
    img: 'https://images.unsplash.com/photo-1639926783705-34fedf78685d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=522&q=80',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    saleInfo: {
      isInSale: false,
      salePrice: 0,
      saleType: '',
    },
    category: { woman: ['jackets and coats'] },
  },
  {
    _id: 'P103',
    name: 'Coat man',
    price: 40.0,
    desc: 'coat',
    img: 'https://images.unsplash.com/photo-1641299549081-816e7388acbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    saleInfo: {
      isInSale: false,
      salePrice: 0,
      saleType: '',
    },
    category: { man: ['jackets and coats'] },
  },
  {
    _id: 'P104',
    name: 'Top',
    price: 40.0,
    desc: '',
    img: 'https://images.unsplash.com/photo-1619784299133-f691ffaea42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    saleInfo: {
      isInSale: false,
      salePrice: 0,
      saleType: '',
    },
    category: { girls: ['tops'] },
  },
  {
    _id: 'P105',
    name: 'Shoes',
    price: 40.0,
    desc: 'top shirt',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    saleInfo: {
      isInSale: false,
      salePrice: 0,
      saleType: '',
    },
    category: { accessories: ['shoes'] },
  },
  {
    _id: 'P106',
    name: 'Pants',
    price: 40.0,
    img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80',
    desc: 'top shirt',
    colors: [
      {
        browm: [],
      },
    ],
    sizes: ['1', '2', '3', '4'],
    saleInfo: {
      isInSale: false,
      salePrice: 0,
      saleType: '',
    },
    category: { boys: ['pants'] },
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
    subCategory: '',
  });
  public filterBy$ = this._filterBy$.asObservable();

  public query() {
    const filterBy = this._filterBy$.getValue();

    //search
    let products = this._productsDb.filter((product) => {
      return product.name.toLowerCase().includes(filterBy.term.toLowerCase());
    });

    //main categoty
    products = this._productsDb.filter((product) => {
      return Object.keys(product.category).includes(filterBy.mainCategory);
    });

    //subcategory
    if (filterBy.subCategory) {
      products = products.filter((product) => {
        return (product.category as any)[filterBy.mainCategory].includes(
          filterBy.subCategory
        );
      });
    }

    this._products$.next(products);
  }

  public getEmptyProduct() {
    return {
      name: '',
      price: 0,
      img: '',
      desc: '',
      colors: [
        {
          clrName: '',
          imgs: [],
          clr: '',
        },
      ],
      sizes: [''],
      saleInfo: {
        isInSale: false,
        salePrice: 0,
        saleType: '',
      },
      category: {},
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
