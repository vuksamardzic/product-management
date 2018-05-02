import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../interfaces/product.interface';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {

  private _productUrl = './api/products/products.json';

  constructor(private http: HttpClient) { }

  static initProduct(): IProduct {
    return {
      id: 0,
      name: null,
      code: null,
      description: null,
      available: null,
      price: null,
      rating: null,
      imageUrl: null
    };
  }

  private static handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._productUrl)
      .catch(ProductService.handleError);
  }

  getProduct(id: number): Observable<IProduct> {
    if (id === 0) {
      return Observable.of(ProductService.initProduct());
    }
    return this.getProducts()
      .map((products: IProduct[]) => products.find(p => p.id === id));
  }

}
