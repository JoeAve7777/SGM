import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfiguration } from '../config/app-configuration';
import { Server } from '../models/server';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private apiUrl = 'servers';

  constructor(private http: HttpClient, private appConfiguration:AppConfiguration) {
    this.apiUrl = appConfiguration.apiBaseUrl + this.apiUrl;
  }

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.apiUrl);
  }
}
