import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../../shared/modules/shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';
import { ProductService } from './services/product.service';
import { ProductGuardService } from './services/product-guard.service';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  imports: [
    HttpClientModule,
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
    ProductEditComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
