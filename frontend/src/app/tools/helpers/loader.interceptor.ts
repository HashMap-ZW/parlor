import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from '../services';

export function LoaderInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // Inject the current `AuthService` and use it to get an authentication token:
  const loaderService = inject(LoaderService);
  // Clone the request to add the authentication header.

  if(req.method !== 'GET') {
  loaderService.show();

}
  return next(req).pipe(finalize(() => loaderService.hide())); //-
}
