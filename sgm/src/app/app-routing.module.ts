import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoute } from './enums/app-enums';
import { ServerListGuard } from './guards/server-list.guard';

import { LoginComponent } from './screens/login/login.component';
import { ServerListComponent } from './screens/server-list/server-list.component';
import { DefaultComponent } from './screens/default/default.component';

const routes: Routes = [
  { path: AppRoute.Login, component: LoginComponent, pathMatch: 'full' },
  {
    path: AppRoute.ServerList,
    component: ServerListComponent,
    pathMatch: 'full',
    canActivate: [ServerListGuard],
  },
  { path: AppRoute.Default, component: DefaultComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
