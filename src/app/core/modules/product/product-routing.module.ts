import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductGuardService } from './services/product-guard.service';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductResolverService } from './services/product-resolver.service';
import { ProductEditInfoComponent } from './components/product-edit-info/product-edit-info.component';
import { ProductEditPriceComponent } from './components/product-edit-price/product-edit-price.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: ':id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent,
        resolve: {
          product: ProductResolverService
        }
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        resolve: {
          product: ProductResolverService
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'info'
          },
          {
            path: 'info',
            component: ProductEditInfoComponent
          },
          {
            path: 'price',
            component: ProductEditPriceComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
