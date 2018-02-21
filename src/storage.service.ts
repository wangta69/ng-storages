import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class StorageService {

	constructor() {}

	/**
	* @param Object {key:value}
	* @return Callback Function
	*/
	public set(obj:any, callback?: Function) {
		let key = Object.keys(obj)[0];
		let value = obj[key]

		localStorage.setItem(key, value);

		if(typeof callback != 'undefined')
			callback(true);
	}
	/**
	* @param Object {key:{object}}
	* @return Callback Function
	*/
	public setObject(obj:any, callback?: Function) {
		let key = Object.keys(obj)[0];
		let value = obj[key]

		localStorage.setItem(key, JSON.stringify(value));
		if(typeof callback != 'undefined')
			callback(true);
	}

	public get(key, callback: Function) {
		let result = localStorage.getItem(key);
		callback(result);
	}


	public getObject(key, callback: Function) {
		let result = localStorage.getItem(key);
		callback(JSON.parse(result));
	}

}
