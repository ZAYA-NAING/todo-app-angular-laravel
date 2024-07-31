import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner/spinner.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService, private nzMessageService: NzMessageService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      url: request.url,
    });

    return next.handle(request).pipe(
      tap(() => this.spinnerService.isSpinning$.next(true)),
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.handleSucceededResponse(event);
        }
      }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          this.handledFailedResponse(err);
        }
        return throwError(err);
      }),
      finalize(() => this.spinnerService.isSpinning$.next(false)),
    );
  }

  private handleSucceededResponse(response: HttpResponse<any>): void {
    if (!response?.body?.message) {
      return;
    }
    if (!response?.body?.result) {
      this.nzMessageService.error(response?.body?.message.title);
      return;
    }
    this.nzMessageService.success(response?.body?.message.title);
  }

  private handledFailedResponse(response: HttpErrorResponse): void {
    if (response.error?.message && response.error?.message?.title) {
      console.log(response.error.message.title);
    }
    throwError(response);
  }
}
