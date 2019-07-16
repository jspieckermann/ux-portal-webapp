import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatMenuModule,
  MatIconModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule,
  MatSnackBarModule, MatExpansionModule, MatBadgeModule, MatTooltipModule, MatGridListModule,
  MatDividerModule } from '@angular/material';

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
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
