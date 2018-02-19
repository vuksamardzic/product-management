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
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ProductResolverService } from './services/product-resolver.service';
import { ProductEditInfoComponent } from './components/product-edit-info/product-edit-info.component';

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
    ProductEditComponent,
    ProductFilterPipe,
    ProductEditInfoComponent
  ],
  providers: [
    ProductService,
    ProductGuardService,
    ProductResolverService
  ]
})
export class ProductModule { }
