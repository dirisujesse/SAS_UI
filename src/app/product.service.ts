import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  header = new Headers({ 'Content-Type': 'application/json' })

  constructor(private http: Http) { }

  getProducts() {
  	return this.http.get(`http://localhost:1111/product`).map((res: Response) => res.json())
  }

  getProduct(id: number) {
    return this.http.get(`http://localhost:1111/product/${id}`).map((res: Response) => res.json())
  }

  getPbyQuery(q) {
  	return this.http.get(`http://localhost:1111/product?q=${q}`).map((res: Response) => res.json());	
  }

  getPbyFilters(q, price_l?, price_g?) {
    return this.http.get(`http://localhost:1111/product?q=${q}&price_gte=${price_l}&price_lte=${price_g}`).map((res: Response) => res.json());
  }
}
