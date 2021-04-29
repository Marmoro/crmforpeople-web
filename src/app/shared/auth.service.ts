import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://172.16.18.102:3000/user';
  constructor(private http: HttpClient) { }

  login(email: string) {
    return this.http
      .post(`${this.url}/login`, { email })
      .pipe(map(data => data), catchError((err: HttpErrorResponse) => {
        return throwError(err);
      }));
  }

  verify(email: string, password: string) {
    return this.http
      .post(`${this.url}/verify`, { email, password }, { withCredentials: true })
      .pipe(map(data => data), catchError((err: HttpErrorResponse) => {
        return throwError(err);
      }));
  }

  profile() {
    return this.http
      .get(`${this.url}/profile`, { withCredentials: true })
      .pipe(map(data => data), catchError((err: HttpErrorResponse) => {
        return throwError(err);
      }));
  }

  logOut() {
    return this.http
      .get(`${this.url}/logOut`, { withCredentials: true })
      .pipe(map(data => data), catchError((err: HttpErrorResponse) => {
        return throwError(err);
      }));
  }

  isAuthenticated() {
    return this.http
      .get(`${this.url}/isAuthenticated`, { withCredentials: true })
      .pipe(map(data => data), catchError((err: HttpErrorResponse) => {
        return throwError(err);
      }));
  }

}
