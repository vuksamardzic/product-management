import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product';
  product: IProduct;
  errorMessage: string;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) { }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if ( param ) {
      this._productService.getProduct(+param).subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error);
    }

  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
