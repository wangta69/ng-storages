import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {}

    /**
    * @param Object {key:value}
    * this.storage.set({key: value}).then((res) => {
    *    console.log(res);
    * });
    */
    public set(obj: any): Promise<boolean> {
        const key = Object.keys(obj)[0];
        const value = obj[key];

        localStorage.setItem(key, value);
        return new Promise(resolve => resolve(true));
    }
    /**
     * @param Object {key:{object}}
     * this.storage.setObject({key: object}).then((res) => {
     * console.log(res);
     * });
    */
    public setObject(obj: any): Promise<boolean> {
        const key = Object.keys(obj)[0];
        const value = obj[key];

        localStorage.setItem(key, JSON.stringify(value));
        return new Promise(resolve => resolve(true));
    }
    /**
     * this.storage.get('key').then((res) => {
     *    console.log(res);
     * });
     */
    public get(key: string): Promise<string> {
        const result = localStorage.getItem(key);
        return new Promise(resolve => resolve(result));
    }


    /**
     * this.storage.getObject('key').then((res) => {
     *   console.log(res);
     * });
    */
    public getObject(key: string): Promise<any> {
        const result = localStorage.getItem(key);
        return new Promise(resolve => resolve(JSON.parse(result)));
    }

    public delete(key: string) {
        localStorage.removeItem(key);
        return new Promise(resolve => resolve(true));
    }
    public clear() {
        localStorage.clear();
        return new Promise(resolve => resolve(true));
    }

    /**
     * @param Object {key:value}
     * @return Callback Function
     * @Deprecated
     */
    public setCallback(obj: any, callback?: (body: any) => void) {
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
    public setObjectCallback(obj: any, callback?: (body: any) => void) {
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
    public getCallback(key: string, callback: (body: any) => void) {
        const result = localStorage.getItem(key);
        callback(result);
    }

    /**
     * @Deprecated
     */
    public getObjectCallback(key: string, callback: (body: any) => void) {
        const result = localStorage.getItem(key);
        callback(JSON.parse(result));
    }
}
