import { HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { filter, map } from 'rxjs';
import { LoaderService } from '../services';

export function ResponseInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const loaderService = inject(LoaderService);
  return next(req).pipe(
    // proceed when there is a response; ignore other events

    filter((event) => event instanceof HttpResponse),
    map((event: HttpResponse<any>) => {
      loaderService.hide();
      return event;
    })
  );
}
