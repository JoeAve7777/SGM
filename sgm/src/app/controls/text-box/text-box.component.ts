import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css'],
})
export class TextBoxComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() labelCaption: string = '';
  @Input() placeHolder: string = '';

  @Output() textBoxClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  click() {
    this.textBoxClick.emit('Clicked');
  }

  getFormControls(): any {
    return this.formGroup.controls;
  }

  get hasErrors(): boolean {
    let result: boolean = false;

    const fc = this.getFormControls();

    if (fc != null) {
      result = fc[this.id].errors;
    }
    return result;
  }

  get isPristine(): boolean {
    let result: boolean = false;

    const fc = this.getFormControls();

    if (fc != null) {
      result = fc[this.id].pristine;
    }
    return result;
  }
}
