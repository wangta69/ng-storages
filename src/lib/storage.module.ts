import { NgModule } from '@angular/core';
import { LocalStorageService } from './local.storage.service';
import { SessionStorageService } from './session.storage.service';
import { CookieService } from './cookie.service';
@NgModule({
  providers: [ LocalStorageService,  SessionStorageService, CookieService]
})
export class StorageModule {}
