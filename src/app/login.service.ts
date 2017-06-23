import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'Rxjs/Rx';
import 'rxjs/add/operator/map';

import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class LoginService {
    p_url = 'http://localhost:1111/user';
    headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http, private auth: AuthGuardService) {  }

    login(user_name, password) {
        try {
            return this.http
                .get(`${this.p_url}?user_name=${user_name}&password=${password}`)
                .map((res: Response) => res.json());
        } catch (err) {
            alert(err.text());
        }
    }
}
