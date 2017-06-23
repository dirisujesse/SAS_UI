import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service'

@Component({
  selector: 'app-productcatalogue',
  templateUrl: './productcatalogue.component.html',
  styleUrls: ['./productcatalogue.component.css']
})
export class ProductcatalogueComponent implements OnInit {
  products: any;
  recommended: any;
  constructor(private service: ProductService) { }
  
  getProductsF(name, price, o_price) {
    this.service.getPbyFilters(name, price, o_price).subscribe(res => this.products = res)
  }

  getProductsN(name) {
    this.service.getPbyQuery(name).subscribe(res => this.products = res)
  }

  ngOnInit() {
    this.service.getProducts().subscribe(res => this.recommended = res)
  }

}
