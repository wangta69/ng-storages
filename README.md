# ng-storages
Tested for angular5

## Installation
```
npm install ng-storages
```

## How to use
``` app.module.ts
import { StorageService } from 'ng-storages'
@NgModule({
    providers: [ StorageService ]
})

```


``` app.componet.ts
import { StorageService } from 'ng-storages'

export class AComponent{
    constructor(protected storage:StorageService){}

    private set_string(){
        this.storage.set({key:value});
    }

    private set_string_callback(){
        this.storage.set({key:value}, function(result){
                //To Do
        }.bind(this));
    }

    private set_object(){
        this.storage.setObject({key: object});
    }

    private get_string(){
        this.storage.get('key', function(str){

      }.bind(this));
    }

    private get_object(){
        this.storage.get('key', function(object){

      }.bind(this));
    }
}
```
