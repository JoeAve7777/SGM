import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../enums/app-config';
import { user } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PasswordControlService {
  private apiUrl = 'users';

  constructor(private http: HttpClient) {
    this.apiUrl = AppConfig.ApiBaseUrl + this.apiUrl;
  }

  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.apiUrl);
  }

  getUser(id: number): Observable<user> {
    return this.http.get<user>(this.apiUrl + '/' + id);
  }

  deleteUser(id: number): Observable<user> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<user>(url);
  }

  putUser(u: user): Observable<user> {
    const url = `${this.apiUrl}/${u.id}`;

    return this.http.put<user>(url, u, httpOptions);
  }

  postPasswordControl(u: user): Observable<user> {
    return this.http.post<user>(this.apiUrl, u, httpOptions);
  }
}
