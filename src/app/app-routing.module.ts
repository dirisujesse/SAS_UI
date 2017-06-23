import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductcatalogueComponent } from './productcatalogue/productcatalogue.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
    {path: '', redirectTo: '/catalogue', pathMatch: 'full'},
    {path: 'catalogue', component: ProductcatalogueComponent},
    {path: 'product/:id', component: ProductdetailComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
  ]
})
export class AppRoutingModule { }
