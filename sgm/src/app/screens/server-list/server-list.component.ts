import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { Server } from 'src/app/models/server';
import { ServerService } from 'src/app/services/serverService.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
})
export class ServerListComponent implements OnInit, OnDestroy {
  constructor(private serverService: ServerService) {}

  obsSub!: Subscription;
  serverList: Server[] = [];

  ngOnInit(): void {
    this.loadServerData();
  }

  ngOnDestroy(): void {}

  loadServerData() {
    this.obsSub = this.serverService.getServers().subscribe(
      (data) => {
        this.serverList = data;
      },
      (error) => {
        //error
      },
      () => {
        //complete
      }
    );
  }
}