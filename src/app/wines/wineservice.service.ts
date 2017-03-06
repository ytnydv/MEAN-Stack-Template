import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";

import { Wines } from './wines.model';

@Injectable()
export class WinesService {
    private _url = "http://localhost:3000";
    constructor(private _http: Http) { }

    getAllWines():Observable<Wines[]> {
        return this._http.get(this._url + '/wines').map(res => res.json());
    }
}
