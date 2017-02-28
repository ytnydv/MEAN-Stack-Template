import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";

import { Post } from './jsonplaceholder.model';

@Injectable()
export class JPostService {
    private _url = "https://jsonplaceholder.typicode.com";
    constructor(private _http: Http) { }

    getAllPosts():Observable<Post[]> {
        return this._http.get(this._url + '/posts').map(res => res.json());
    }
}
