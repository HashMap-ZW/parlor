import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, mergeMap, of, retryWhen } from 'rxjs';
import { AlertService, LoaderService } from '../services';

export const maxRetries = 2;
export const delayMs = 2000;

export function ErrorInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const alertService = inject(AlertService);
  const loaderService = inject(LoaderService);

  return next(req).pipe(
    retryWhen((error) => {
      return error.pipe(
        mergeMap((error, index) => {
          if (index < maxRetries) {
            if (Array.isArray(error.error.message)) {
              alertService.error(error.error.message[0]);
            } else {
              alertService.error(error.error.message);
            }
            loaderService.hide();
            return of(error).pipe(delay(delayMs));
          }

          return '';
        })
      );
    })
  );
}
