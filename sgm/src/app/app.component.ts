import { Component } from '@angular/core';
import { AppConfiguration } from './config/app-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title?: string = '';

  constructor(private appConfig: AppConfiguration) {
    this.title = appConfig.title;
  }
}
