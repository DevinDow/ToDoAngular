import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { rootURL } from "../assets/javascript/apis.js";
import { Credentials } from './credentials.js';

import { map, tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private loginUrl = rootURL + '/login.json'

  constructor(private http: HttpClient) { }

  // POST /login
  postLogin (credentials: Credentials): Observable<string> {
    console.log("*** TodoService.postLogin()")
    return this.http.post<string>(this.loginUrl, credentials, httpOptions)
      .pipe(
        tap(heroes => this.log("logged in")),
        catchError(this.handleError("postLogin()", "cannot login"))
      );
  }

  private log(message: string) {
    console.log(message);
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
