import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductcatalogueComponent } from './productcatalogue/productcatalogue.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NairaPipe, TruncatePipe } from './naira.pipe';

import { ProductService } from './product.service';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductcatalogueComponent,
    ProductdetailComponent,
    NairaPipe,
    TruncatePipe,
    UserComponent,
    SignupComponent,
    LoginComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
