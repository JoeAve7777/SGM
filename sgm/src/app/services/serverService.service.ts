import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfigInternal } from '../enums/app-config-interal';
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
    this.apiUrl = AppConfigInternal.ApiBaseUrl + this.apiUrl;
  }

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.apiUrl);
  }
}
