import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';

import { TextBoxComponent } from '../controls/text-box/text-box.component';
import { TagComponent } from '../controls/tag/tag.component';

@NgModule({
  bootstrap: [],
  declarations: [TextBoxComponent, TagComponent],
  exports: [TextBoxComponent, TagComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    CommonModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    MenubarModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
})
export class ControlsModule {}
