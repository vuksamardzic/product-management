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
  products: IProduct[];
  filteredProducts: IProduct[] = [];
  errorMessage: string;

  _filterValue: string;

  get filterValue(): string {
    return this._filterValue;
  }

  set filterValue(value: string) {
    this._filterValue = value;
    this.filteredProducts = this.filterValue ? this.performFilter(this.filterValue) : this.products;
  }

  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this._filterValue = this.route.snapshot.queryParams['filterBy'] || '';
    this.showImage = this.route.snapshot.queryParamMap.get('showImage') === 'true';
    // variation in syntax : queryParams || queryParamMap and params || paramMap
    // optional param -> this.route.snapshot.paramMap.get('name');
    // optional param -> this.route.snapshot.params['name'];

    this._productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error);
  }
}
