import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthGuardService } from './auth-guard.service';

@Injectable()

export class LoginguardGuard implements CanActivate {
  constructor (private service: AuthGuardService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.service.isLoggedin();
    console.log('CanActivate', isLoggedIn);
    return isLoggedIn;
  }
}
