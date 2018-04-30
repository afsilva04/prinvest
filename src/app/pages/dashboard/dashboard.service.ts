import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Global } from '../global';

@Injectable()
export class DashboardService{
    public url:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
    }

    getOperationsByCoin(){
        return this._http.get(this.url + 'reports').map(res => res.json());
    }
}