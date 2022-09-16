import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { GlobalErrorHandlerInterceptor } from './interceptors/global-error-handler.interceptor';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

import { ControlsModule } from './controls/controls.module';

import {
  getTitle,
  HelperModuleModule,
} from './helper-module/helper-module.module';

import { AppConfigInternal } from './enums/app-config-interal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './screens/login/login.component';
import { ServerListComponent } from './screens/server-list/server-list.component';
import { JsonAppConfigService } from './config/json-app-config.service';
import { AppConfiguration } from './config/app-configuration';

export function initializerFn(jsonAppConfigService: JsonAppConfigService) {
  return () => {
    return jsonAppConfigService.load();
  };
}

@NgModule({
  declarations: [AppComponent, LoginComponent, ServerListComponent],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // PrimeNg Modules
    ButtonModule,
    SharedModule,
    StyleClassModule,
    HttpClientModule,
    ConfirmDialogModule,
    DialogModule,
    CardModule,
    InputTextModule,
    TableModule,
    TagModule,
    DropdownModule,
    // Include Application Modules
    AppRoutingModule,
    HelperModuleModule,
    ControlsModule,
  ],
  providers: [
    { provide: AppConfigInternal.Title, useFactory: getTitle },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: AppConfiguration,
      deps: [HttpClient],
      useExisting: JsonAppConfigService,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [JsonAppConfigService],
      useFactory: initializerFn,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
