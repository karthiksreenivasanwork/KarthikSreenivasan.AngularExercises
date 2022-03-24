import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { MponehomeComponent } from './mponehome.component';
import { MponeaddpaymentComponent } from './mponecomponents/mponeaddpayment/mponeaddpayment.component';
import { MponelistpaymentsComponent } from './mponecomponents/mponelistpayments/mponelistpayments.component';

import { MiniprojectoneroutingModule } from './miniprojectonerouting.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MponeaddpaymentComponent,
    MponehomeComponent,
    MponelistpaymentsComponent
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
    MatDialogModule
  ],
})
export class MiniprojectoneModule {}