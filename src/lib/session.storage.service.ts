import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {

    constructor() {}

    /**
    * @param Object {key:value}
    * @return Callback Function
    */
    public set(obj: any): Promise<boolean> {
        const key = Object.keys(obj)[0];
        const value = obj[key];

        sessionStorage.setItem(key, value);
        return new Promise(resolve => resolve(true));
    }
    /**
    * @param Object {key:{object}}
    * @return Callback Function
    */
    public setObject(obj: any): Promise<boolean> {
        const key = Object.keys(obj)[0];
        const value = obj[key];

        sessionStorage.setItem(key, JSON.stringify(value));
        return new Promise(resolve => resolve(true));
    }

    public get(key: string): Promise<string> {
        const result = sessionStorage.getItem(key);
        return new Promise(resolve => resolve(result));
    }

    public getObject(key: string): Promise<any> {
        const result = sessionStorage.getItem(key);
        return new Promise(resolve => resolve(JSON.parse(result)));
    }
}
