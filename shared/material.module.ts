import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
// import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatRadioModule} from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { TextFieldModule } from '@angular/cdk/text-field';


// import { MatTableFilterModule } from 'mat-table-filter';

// import {  } from '@angular/material';  MatNativeDateModule, MatMomentDateModule,

const material = [
  MatPaginatorModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatProgressBarModule,
  MatRadioModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatButtonModule,
  MatSliderModule,
  MatToolbarModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatTooltipModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatStepperModule,
  MatTableModule,
  MatNativeDateModule,
  TextFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatTreeModule,
//   MatMomentDateModule,
  MatDatepickerModule,
//   NgxMatSelectSearchModule,
//   MatPasswordStrengthModule,
  MatCheckboxModule,
//   SatDatepickerModule,
//   SatNativeDateModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
//   MatTableFilterModule,
];

@NgModule({
  declarations: [],
  imports: [material],
  exports:[material],
  providers: [ { provide: MAT_DIALOG_DATA, useValue: [] } ]

})
export class MaterialModule { }
