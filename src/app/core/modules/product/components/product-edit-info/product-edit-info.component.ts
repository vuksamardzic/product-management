import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'pm-product-edit-info',
  templateUrl: './product-edit-info.component.html',
  styleUrls: ['./product-edit-info.component.scss']
})
export class ProductEditInfoComponent implements OnInit {
  product: IProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.product = data['product'];
    });
  }

}
