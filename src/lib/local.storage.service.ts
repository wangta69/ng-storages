import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {}

    /**
    * @param Object {key:value}
    * @return Callback Function
    */
    public set(obj: any): Promise<boolean> {
        const key = Object.keys(obj)[0];
        const value = obj[key];

        localStorage.setItem(key, value);
        return new Promise(resolve => resolve(true));
    }
    /**
    * @param Object {key:{object}}
    * @return Callback Function
    */
    public setObject(obj: any): Promise<boolean> {
        const key = Object.keys(obj)[0];
        const value = obj[key];

        localStorage.setItem(key, JSON.stringify(value));
        return new Promise(resolve => resolve(true));
    }

    public get(key): Promise<string> {
        const result = localStorage.getItem(key);
        return new Promise(resolve => resolve(result));
    }

    public getObject(key): Promise<any> {
        const result = localStorage.getItem(key);
        return new Promise(resolve => resolve(JSON.parse(result)));
    }

    /**
    * @param Object {key:value}
    * @return Callback Function
    * @Deprecated
    */
    public setCallback(obj: any, callback?: Function) {
        const key = Object.keys(obj)[0];
        const value = obj[key];

        localStorage.setItem(key, value);

        if (typeof callback !== 'undefined') {
            callback(true);
        }
    }
    /**
    * @param Object {key:{object}}
    * @return Callback Function
    * @Deprecated
    */
    public setObjectCallback(obj: any, callback?: Function) {
        const key = Object.keys(obj)[0];
        const value = obj[key];

        localStorage.setItem(key, JSON.stringify(value));
        if (typeof callback !== 'undefined') {
            callback(true);
        }
    }

    /**
    * @Deprecated
    */
    public getCallback(key, callback: Function) {
        const result = localStorage.getItem(key);
        callback(result);
    }

    /**
    * @Deprecated
    */
    public getObjectCallback(key, callback: Function) {
        const result = localStorage.getItem(key);
        callback(JSON.parse(result));
    }
}
