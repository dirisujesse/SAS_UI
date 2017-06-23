import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  template: `
    <button type="button" class="btn btn-info btn-toolbar" data-toggle="modal" data-target="#myModal"><i class="fa fa-heart"></i>Watch Product</button>
      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" style="background: blue">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Please Sign Up to watch Item</h4>
            </div>
            <div class="modal-body">
              <form action="customer-orders.html" method="post">
                <div class="form-group">
                  <input type="text" class="form-control" id="email-modal" placeholder="email">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="password-modal" placeholder="password">
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox"> Accept terms and conditions
                  </label>
                </div>
                <p class="text-center">
                  <button class="btn btn-primary"><i class="fa fa-pencil"></i>Register</button>
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
  `,
  styles: []
})
export class UserloginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
