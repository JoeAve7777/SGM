import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  @Input() tagText: string = '';
  @Input() tagTitle: string = '';

  constructor() {}

  ngOnInit(): void {}

  getCompliantClass(status: string) {
    let result: string = '';

    switch (status) {
      case 'yes': {
        result = 'compliant-tag-yes';
        break;
      }
      case 'no': {
        result = 'compliant-tag-no';
        break;
      }
      case 'warning': {
        result = 'compliant-tag-warning';
        //statements;
        break;
      }
    }

    return result;
  }

  clickCompliant() {
    alert("Trigger another screen");
  }
}
