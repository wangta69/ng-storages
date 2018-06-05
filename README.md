# ng-storages
Tested for angular5

## Installation
```
npm install ng-storages
```

## How to use
``` app.module.ts
import { LocalStorageService } from 'ng-storages';
@NgModule({
    providers: [ LocalStorageService ]
})

```

## LocalStorage
``` app.componet.ts
import { LocalStorageService } from 'ng-storages';

export class AComponent{
    constructor(protected storage:LocalStorageService){

        this.storage.set({key: value}).then((res) => {
            console.log(res);
        });

        this.storage.get('key').then((res) => {
            console.log(res);
        });

        this.storage.setObject({key: object}).then((res) => {
            console.log(res);
        });



        this.storage.getObject('key').then((res) => {
            console.log(res);
        });
    }
}
```

## Cookie
``` app.module.ts
import { CookieService } from 'ng-storages';
@NgModule({
  providers: [ CookieService ]
})

```

``` app.componet.ts
import { CookieService } from 'ng-storages';

```
