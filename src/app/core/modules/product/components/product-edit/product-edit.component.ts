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
    let id = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      params => {
        let id = +params['id'];
        console.log('new id -> ', id);
        this.innerGetProduct(id);

      },
      error => this.errorMessage = <any>error
    );


  }

  innerGetProduct(id: number): void {
    this.productService.getProduct(id).subscribe(
      product => {
        this.product = product;
        console.log(this.product);
      },
      error => this.errorMessage = <any>error);
  }

}
