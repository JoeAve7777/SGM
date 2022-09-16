import { Component } from '@angular/core';
import { AppConfiguration } from './config/app-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appConfig:AppConfiguration) {
    
    alert(appConfig.title);
  }

  title = 'sgm';
}
