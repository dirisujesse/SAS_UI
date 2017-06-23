import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { UserloginComponent } from '../userlogin/userlogin.component'


import 'rxjs/add/operator/switchMap';

import { ProductService } from '../product.service'

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product: any;

  constructor(
    private service: ProductService,
    private location: Location,
    private route: ActivatedRoute 
  ) { }

  home() {
      this.location.back();
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.service.getProduct(+params['id']))
    .subscribe(res => this.product = res)
  }

}
