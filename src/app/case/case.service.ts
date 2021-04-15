import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Case } from './case.class';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  create(newCase: Case) {
    return this.http
      .post(`${this.url}/case`, newCase)
      .pipe(map(data => data), catchError((err: HttpErrorResponse) => {
        return throwError(err);
      }));
  }

}
