import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoute } from './enums/app-config';

import { LoginComponent } from './screens/login/login.component';


const routes: Routes = [
  { path: AppRoute.Login, component: LoginComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
