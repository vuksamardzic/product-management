import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IProduct } from '../interfaces/product.interface';
import { Observable } from 'rxjs/Observable';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolverService implements Resolve<IProduct>{

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    let id = +route.paramMap.get('id');
    return this.productService.getProduct(id);
  }

}
