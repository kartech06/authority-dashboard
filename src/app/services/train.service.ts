import { Injectable } from '@angular/core';
import { Train } from './train';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  _url='http://localhost:8080/authorities/reschedule/train';
  constructor(private http:HttpClient) { }
  check(retrain: Train)
  {
    return this.http.post<any>(this._url, retrain)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error);
  }
}
