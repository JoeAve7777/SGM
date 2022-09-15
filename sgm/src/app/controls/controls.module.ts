import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    ButtonModule,
    SharedModule,
    StyleClassModule,
    ConfirmDialogModule,
    DialogModule,
    CardModule,
    InputTextModule,
    TableModule,
    TagModule,
    DropdownModule,
  ],
})
export class ControlsModule {}
