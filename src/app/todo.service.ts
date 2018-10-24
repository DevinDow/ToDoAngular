import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjectUnsubscribedError, Observable, of } from 'rxjs';
import { rootURL, getToken } from "../assets/javascript/apis.js";
import { Credentials } from './credentials.js';
import { List } from "./list.js";
import { Task } from "./task.js";

import { map, tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  // POST /login
  postLogin (credentials: Credentials): Observable<string> {
    this.log("postLogin()")
    return this.http.post<string>(`${rootURL}/login.json`, credentials, httpOptions)
      .pipe(
        tap(_ => this.log("logged in")),
        catchError(this.handleError("postLogin()", "cannot login"))
      );
  }

  // GET /lists
  fetchLists (): Observable<List[]> {
    this.log("fetchLists()")
    return this.http.get<List[]>(`${rootURL}/lists.json`, {withCredentials: true})
      .pipe(
        tap(_ => this.log("fetched Lists")),
        catchError(this.handleError("fetchLists()", []))
      );
  }

  // GET /tasks
  fetchTasks (listId: number): Observable<List[]> {
    this.log(`fetchTasks(listId=${listId})`)
    return this.http.get<Task[]>(`${rootURL}/lists/${listId}/tasks.json`, {withCredentials: true})
      .pipe(
        tap(_ => this.log("fetched Tasks")),
        catchError(this.handleError("fetchTasks()", []))
      );
  }


  private log(text: string) {
    console.log(`** TodoService.${text}`);
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
