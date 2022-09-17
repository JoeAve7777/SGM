import { Component, OnInit } from '@angular/core';
import { AppConfiguration } from 'src/app/config/app-configuration';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(public appConfig: AppConfiguration) { }

  ngOnInit(): void {

  }

}
