import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'pm-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.product = data['product'];
    });
  }

}
