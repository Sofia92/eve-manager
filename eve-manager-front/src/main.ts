import { bootstrap } from '@angular/platform-browser-dynamic';
import { RootRouter } from 'angular2/src/router/router';
import { Router } from 'angular2/router';

import { enableProdMode } from '@angular/core';
import { EveManagerFrontAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(EveManagerFrontAppComponent);

