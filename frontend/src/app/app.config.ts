import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    { provide: 'baseUrl', useValue: environment.apiUrl },
  ],
};
