import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatMenuModule,
  MatIconModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule,
  MatSnackBarModule, MatExpansionModule, MatBadgeModule, MatTooltipModule, MatGridListModule,
  MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatBadgeModule,
  MatTooltipModule,
  MatGridListModule,
  MatDividerModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialComponents,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
