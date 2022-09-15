import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../enums/app-config';
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

  constructor(private http: HttpClient) {
    this.apiUrl = AppConfig.ApiBaseUrl + this.apiUrl;
  }

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.apiUrl);
  }
}
