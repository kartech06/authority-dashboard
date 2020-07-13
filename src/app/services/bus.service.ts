import { Injectable } from '@angular/core';
import { RescheduleB } from './reschedule';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusService {

  _url='http://localhost:8080/authorities/reschedule/bus';
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

}
