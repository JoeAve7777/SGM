import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HelperModuleModule { }

export function getTitle() {
  return document.getElementsByTagName('title')[0].text;
}
