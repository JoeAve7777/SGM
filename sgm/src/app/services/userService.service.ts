import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../enums/app-config';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'users';

  constructor(private http: HttpClient) {
    this.apiUrl = AppConfig.ApiBaseUrl + this.apiUrl;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id);
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<User>(url);
  }

  putUser(u: User): Observable<User> {
    const url = `${this.apiUrl}/${u.id}`;

    return this.http.put<User>(url, u, httpOptions);
  }

  postPasswordControl(u: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, u, httpOptions);
  }
}
