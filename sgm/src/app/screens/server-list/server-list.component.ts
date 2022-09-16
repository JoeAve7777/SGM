import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { AppRoute } from 'src/app/enums/app-enums';
import { Server } from 'src/app/models/server';
import { ServerService } from 'src/app/services/serverService.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
})
export class ServerListComponent implements OnInit, OnDestroy {
  constructor(private serverService: ServerService, private router:Router) {}

  obsSub!: Subscription;
  serverList: Server[] = [];

  ngOnInit(): void {
    this.loadServerData();
  }

  loadServerData() {
    this.obsSub = this.serverService.getServers().subscribe(
      (data) => {
        this.serverList = data.sort((a, b) =>
        a.status.toLocaleLowerCase() < b.status.toLocaleLowerCase() ? -1 : 1
      );
      },
      (error) => {
        //error
      },
      () => {
        //complete
      }
    );
  }

  logout()
  {
    sessionStorage.setItem('sgm-auth', '');

    this.router.navigate([AppRoute.Login], {
      replaceUrl: true,
      skipLocationChange: true,
    });
  }

  redirect() {
    window.open("https://www.pitneybowes.com/us", "mozillaTab");
  }

  ngOnDestroy(): void {
    if (this.obsSub != null && this.obsSub != undefined) {
      this.obsSub.unsubscribe();
    }
  }
}
