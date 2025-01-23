import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const auth = inject(AuthService);

  
  
          const idToken = localStorage.getItem("id_token");
  
          if (idToken) {
              const cloned = req.clone({
                  headers: req.headers.set("Authorization",
                      "Bearer " + idToken)
              });
  
              return next(cloned);
          }
          else {
              return next(req);
          }
      
  
 
}