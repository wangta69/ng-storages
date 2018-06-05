/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export class CookieService {
    private isConsented = false;
    /*
    constructor() {
        this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }
    */

    public get_cookie(name: string) {
        const ca: Array<string> = document.cookie.split(';');
        const caLen: number = ca.length;
        const cookieName = `${name}=`;
        let c: string;

        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }

    public delete_cookie(name: string) {
        this.set_cookie(name, '', -1);
    }

    public set_cookie(name: string, value: string, expireDays: number, path: string = '') {
        const d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        const expires = `expires=${d.toUTCString()}`;
        const cpath = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }

/*
    private consent(isConsent: boolean, e: any) {
        if (!isConsent) {
            return this.isConsented;
        } else if (isConsent) {
            this.set_cookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
            this.isConsented = true;
            e.preventDefault();
        }
    }
    */
}
