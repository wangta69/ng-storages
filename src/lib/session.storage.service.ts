import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';

@Injectable()
export class SessionStorageService {

	constructor() {}

	/**
	* @param Object {key:value}
	* @return Callback Function
	*/
	public set(obj:any): Promise<boolean> {
		let key = Object.keys(obj)[0];
		let value = obj[key]

		sessionStorage.setItem(key, value);
		return new Promise(resolve => resolve(true));
	}
	/**
	* @param Object {key:{object}}
	* @return Callback Function
	*/
	public setObject(obj:any): Promise<boolean> {
		let key = Object.keys(obj)[0];
		let value = obj[key]

		sessionStorage.setItem(key, JSON.stringify(value));
		return new Promise(resolve => resolve(true));
	}

	public get(key): Promise<string> {
		let result = sessionStorage.getItem(key);
		return new Promise(resolve => resolve(result));
	}

	public getObject(key): Promise<any> {
		let result = sessionStorage.getItem(key);
		return new Promise(resolve => resolve(JSON.parse(result)));
	}

}
