import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { MponehomeComponent } from './mponehome.component';
import { MponeaddproductsComponent } from './mponecomponents/mponeaddproducts/mponeaddproducts.component';
import { MponelistproductsComponent } from './mponecomponents/mponelistproducts//mponelistproducts.component';
import { MiniprojectoneroutingModule } from './miniprojectonerouting.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MponeaddproductsComponent,
    MponehomeComponent,
    MponelistproductsComponent,
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
  ],
})
export class MiniprojectoneModule {}
