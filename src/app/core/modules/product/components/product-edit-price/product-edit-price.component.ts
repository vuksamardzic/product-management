import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-product-edit-price',
  templateUrl: './product-edit-price.component.html',
  styleUrls: ['./product-edit-price.component.scss']
})
export class ProductEditPriceComponent implements OnInit {
  product: IProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.product = data['product'];
    });
  }

}
