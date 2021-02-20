import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Component, Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*let clonedreq = req.clone({
        headers: req.headers.set("Authorization", "Bearer null")
          .set("Lextra-Program-uid", "65a3c7d1-e429-4469-852f-1e706451fce8")
          .set("API_KEY", "539CBFCB-51BE-431A-8B79-33B9908BC421")
      });*/
      return next.handle(req);
  }
}
