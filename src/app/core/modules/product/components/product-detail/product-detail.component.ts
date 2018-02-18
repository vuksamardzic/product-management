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
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.product = this.route.snapshot.data['product'];
  }

  onBack(): void {
    this.router.navigate(['/products'], { queryParamsHandling: 'preserve' });
  }

}
