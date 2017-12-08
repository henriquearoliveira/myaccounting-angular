import { Http, Headers, Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ServicesAbstract {

    headers: Headers;
    url: string = 'http://localhost:8080';

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {

        this.http = http;
        this.headers = new Headers;
        this.headers.append('Content-Type', 'application/json');
        
        // URLSearchParams PARAMETROS
        // Headers HEADER
        // RequestOptions CONCATENA O HEADER E OS PARAMETROS
        // AUTENTICAÇÃ ??? TODO
        
    }
    
    cadastra(any, uri: string, parametros: URLSearchParams): Observable<Response> {

        if (!this.headers.get('Authorization'))
            this.headers.append('Authorization', 'Bearer ' + this.authenticationService.token);

        
        if (parametros) {

            return this.http
                .post(this.url + uri, JSON.stringify(any), { headers: this.headers, params: parametros });

        } else {

            return this.http
                .post(this.url + uri, JSON.stringify(any), { headers: this.headers });

        }


    }

    get<T>(uri: string, parametros?: URLSearchParams): Observable<T> {

        if (!this.headers.get('Authorization'))
            this.headers.append('Authorization', 'Bearer ' + this.authenticationService.token);

        console.log('authentication: ' + this.authenticationService.token);
        
        if (parametros) {

            return this.http
                .get(this.url + uri, { headers:this.headers, params: parametros })
                .map(res => res.json());

        } else {

            return this.http
                .get(this.url + uri, {headers: this.headers})
                .map(res => res.json());

        }

    }

    seleciona<T>(uri: string, parametros: URLSearchParams): Observable<T[]> {

        if (!this.headers.get('Authorization'))
            this.headers.append('Authorization', 'Bearer ' + this.authenticationService.token);

        if (parametros) {

            return this.http
                .get(this.url + uri, { headers: this.headers, params: parametros })
                .map(res => res.json());

        } else {

            return this.http
                .get(this.url + uri, {headers: this.headers})
                .map(res => res.json());

        }

    }

}