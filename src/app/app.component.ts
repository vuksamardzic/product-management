import { Component } from '@angular/core';
import { ProductService } from './shared/services/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'pm';
}
