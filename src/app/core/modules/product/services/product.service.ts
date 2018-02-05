import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../interfaces/product.interface';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _productUrl = './api/products/products.json';
  
  constructor( private _http: HttpClient ) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
    .do(data => console.log())
    .catch(this.handleError);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.getProducts()
    .map((products: IProduct[]) => products.find(p => p.id === id));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}