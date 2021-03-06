import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgxElectronModule } from 'ngx-electron';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MaterialTimePickerModule } from '@candidosales/material-time-picker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressBarModule,
    MatMenuModule,
    NgxElectronModule,
    MatDialogModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatTabsModule,
    MaterialTimePickerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressBarModule,
    MatMenuModule,
    NgxElectronModule,
    MatDialogModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatTabsModule,
    MaterialTimePickerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDividerModule
  ]
})
export class CoreModule { }
