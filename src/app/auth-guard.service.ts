import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {
    @Input() user = '';
    @Input() password = '';
    @Input() id = '';

    constructor (private http: Http, private router: Router) {}

    login(user: string, password: string): boolean {
        if ((this.user !== '' || this.user !== undefined ) && (this.password !== '' ||  this.password !== undefined)) {
            user = this.user;
            password = this.password;
            localStorage.setItem('username', user);
            localStorage.setItem('id', this.id);
            return true;
        } else {
             return false;
        }
    }

    logout () {
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
    }

    getUser () {
        return localStorage.getItem('username');
    }

    getId () {
        return localStorage.getItem('id');
    }

    isLoggedin () {
        return this.getUser() !== null;
    }
}

export const AUTH_PROVIDERS: any[] = [
   {provide: AuthGuardService, useClass: AuthGuardService}
];
