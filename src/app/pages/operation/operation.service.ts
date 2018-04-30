import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Operation } from './operation.model' ;
import { Global } from '../global';

@Injectable()
export class OperationService{
    public url:string;
    public coinMarketCapUrl:string;

    constructor(
        private _http:Http
    ){
        this.url = Global.url;
        this.coinMarketCapUrl = 'https://api.coinmarketcap.com/';
    }

    getAllOperations(){
        return this._http.get(this.url + 'operations').map(res => res.json());
    }

    getOperations(searchTxt:string) {
        return this._http.get(this.url + 'operations/search?search=' + searchTxt).map(res => res.json());
    }

    getOperation(id:number){
        return this._http.get(this.url + 'operations/' + id).map(res => res.json());
    }

	createOperation(operation:Operation){
		let params = JSON.stringify(operation);
		let headers = new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url + 'operations', params, {headers: headers}).map(res => res.json());
    }

    updateOperation(operation:Operation){
        let params = JSON.stringify(operation);
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.put(this.url + 'operations', params, {headers: headers}).map(res => res.json());
    }

    getOperationsByCoin(){
        return this._http.get(this.url + 'reports').map(res => res.json());
    }

    //Coinmarketcap.com
    
    getCoins() {
        return this._http.get(this.coinMarketCapUrl + 'v1/ticker/').map(res => res.json());
    }

}