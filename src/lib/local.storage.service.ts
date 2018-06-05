import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';


@Injectable()
export class LocalStorageService {

	constructor() {}

	/**
	* @param Object {key:value}
	* @return Callback Function
	*/
	public set(obj:any): Promise<boolean> {
		let key = Object.keys(obj)[0];
		let value = obj[key]

		localStorage.setItem(key, value);
		return new Promise(resolve => resolve(true));
	}
	/**
	* @param Object {key:{object}}
	* @return Callback Function
	*/
	public setObject(obj:any): Promise<boolean> {
		let key = Object.keys(obj)[0];
		let value = obj[key]

		localStorage.setItem(key, JSON.stringify(value));
		return new Promise(resolve => resolve(true));
	}

	public get(key): Promise<string> {
		let result = localStorage.getItem(key);
		return new Promise(resolve => resolve(result));
	}

	public getObject(key): Promise<any> {
		let result = localStorage.getItem(key);
		return new Promise(resolve => resolve(JSON.parse(result)));
	}

	/**
	* @param Object {key:value}
	* @return Callback Function
	* @Deprecated
	*/
	public setCallback(obj:any, callback?: Function) {
		let key = Object.keys(obj)[0];
		let value = obj[key]

		localStorage.setItem(key, value);

		if(typeof callback != 'undefined')
			callback(true);
	}
	/**
	* @param Object {key:{object}}
	* @return Callback Function
	* @Deprecated
	*/
	public setObjectCallback(obj:any, callback?: Function) {
		let key = Object.keys(obj)[0];
		let value = obj[key]

		localStorage.setItem(key, JSON.stringify(value));
		if(typeof callback != 'undefined')
			callback(true);
	}

	/**
	* @Deprecated
	*/
	public getCallback(key, callback: Function) {
		let result = localStorage.getItem(key);
		callback(result);
	}

	/**
	* @Deprecated
	*/
	public getObjectCallback(key, callback: Function) {
		let result = localStorage.getItem(key);
		callback(JSON.parse(result));
	}



}
