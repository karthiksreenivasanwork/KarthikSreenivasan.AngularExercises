import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MiniprojectoneroutingModule } from './miniprojectonerouting.module';
import { FormsModule } from '@angular/forms';

import { MponehomeComponent } from './mponehome.component';
import {
  MponeaddpaymentComponent,
  MponeaddpaymentDialogComponent,
} from './mponecomponents/mponeaddpayment/mponeaddpayment.component';
import { MponelistpaymentsComponent } from './mponecomponents/mponelistpayments/mponelistpayments.component';

import { CardnumbermaskPipe } from './mponecustompipe/cardnumbermask.pipe';
import { MponefilterlistpaymentPipe } from './mponecustompipe/mponefilterlistpayment.pipe';
import { MponefilterlistpaymentcountPipe } from './mponecustompipe/mponefilterlistpaymentcount.pipe';
import { CardimageselectorPipe } from './mponecustompipe/cardimageselector.pipe';
import { FirstletteruppercasePipe } from './mponecustompipe/firstletteruppercase.pipe';

import { CardnumberhyphenatorDirective } from './mponecustomdirective/cardnumberhyphenator.directive';
import { CardnumberhyphenatorPipe } from './mponecustompipe/cardnumberhyphenator.pipe';
@NgModule({
  declarations: [
    MponehomeComponent,
    MponeaddpaymentComponent,
    MponeaddpaymentDialogComponent,
    MponelistpaymentsComponent,

    CardnumbermaskPipe,
    MponefilterlistpaymentPipe,
    MponefilterlistpaymentcountPipe,
    CardimageselectorPipe,
    FirstletteruppercasePipe,

    CardnumberhyphenatorDirective,
     CardnumberhyphenatorPipe,
  ],
  imports: [
    CommonModule,
    FormsModule, //Required for ngModel 2 way data binding.

    MiniprojectoneroutingModule,

    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class MiniprojectoneModule {}
