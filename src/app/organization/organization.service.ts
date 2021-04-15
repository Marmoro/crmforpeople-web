import { Organization } from './organization.class';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Organization[]>(`${this.url}/organization`).pipe(
      map(data => data), catchError((err : HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}
