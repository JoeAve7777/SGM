import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { DisplayListItem } from 'src/app/models/display-list-item';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css'],
})
export class DropDownListComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() id: string = '';
  @Input() labelCaption: string = '';
  @Input() placeHolder: string = '';
  @Input() options: Array<DisplayListItem> = new Array<DisplayListItem>();

  @Output() textBoxClick: EventEmitter<string> = new EventEmitter<string>();

  showError: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.showError = this.hasErrors;
  }

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
      result = (fc[this.id].errors != null);
    }
    return result;
  }
}
