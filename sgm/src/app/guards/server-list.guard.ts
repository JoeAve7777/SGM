import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppRoute } from 'src/app/enums/app-enums';

@Injectable({
  providedIn: 'root',
})
export class ServerListGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const sgmAuth = sessionStorage.getItem('sgm-auth');

    console.log('Hit Gaurd' + sgmAuth);

    if (sgmAuth !== null && sgmAuth !== '') {
      return true;
    } else {
      
      this.router.navigate([AppRoute.Login], {
        replaceUrl: true,
        skipLocationChange: true,
      });
      return false;
    }
  }
}
