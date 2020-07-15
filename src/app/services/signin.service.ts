import { Injectable } from '@angular/core';
import { Login } from './signin';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SigninService {
  username="";
  _url='http://localhost:8080/authorities/login';
  constructor(private http:HttpClient) { }
  check(login: Login)
  {
    return this.http.post<any>(this._url, login)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error);
  }

}
