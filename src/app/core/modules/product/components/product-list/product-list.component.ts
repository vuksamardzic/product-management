import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product list';
  showImage: boolean = false;
  products: IProduct[] = [];
  errorMessage: string;
  filterValue: string;

  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this.filterValue = this.route.snapshot.queryParams['filterBy'] || '';
    this.showImage = this.route.snapshot.queryParamMap.get('showImage') === 'true';
    // variation in syntax : queryParams || queryParamMap and params || paramMap
    // optional param -> this.route.snapshot.paramMap.get('name');
    // optional param -> this.route.snapshot.params['name'];

    this._productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
        },
        error => this.errorMessage = <any>error);
  }
}
