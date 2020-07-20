import { Injectable } from '@angular/core';
import { RescheduleB } from './reschedule';
import { CancelB } from './cancelbus';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusService {

  _url='http://localhost:8080/authorities/reschedule/bus';
  url_="http://localhost:8080/authorities/bus/information";
  _url_="http://localhost:8080/authorities/bus/dashboard";
  constructor(private http:HttpClient) { }
  check(rebus: RescheduleB)
  {
    return this.http.post<any>(this._url, rebus)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error);
  }
  cancelb(cancel: CancelB)
  {
    return this.http.post<any>(this.url_, cancel)
    .pipe(catchError(this.errorHandle))
  }
  errorHandle(error: HttpErrorResponse)
  {
    return throwError(error);
  }
  getdb()
  {
    return this.http.get<any>(this._url_)
    .pipe(catchError(this.errorHandle))
  }
}
