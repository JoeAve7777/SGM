import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoute } from './enums/app-config-interal';

import { LoginComponent } from './screens/login/login.component';
import { ServerListComponent } from './screens/server-list/server-list.component';


const routes: Routes = [
  { path: AppRoute.Login, component: LoginComponent, pathMatch: 'full'},
  { path: AppRoute.ServerList, component: ServerListComponent, pathMatch: 'full'},
  { path: AppRoute.Default, component: LoginComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
