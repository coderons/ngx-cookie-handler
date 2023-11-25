import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CookieService } from '../../../ngx-cookie-handler/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), CookieService]
};
