import { Component, OnInit } from '@angular/core';

import { AppConfig } from 'src/app/enums/app-config';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formGroup!:FormGroup;
  copyRight:string = AppConfig.CopyRight;
  title:string = AppConfig.Title;

  ngOnInit(): void {

    this.setupFormGroup();
  }

  setupFormGroup() {
    this.formGroup = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

}
