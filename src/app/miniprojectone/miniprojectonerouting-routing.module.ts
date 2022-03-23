import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MponehomeComponent } from './mponehome.component';
import { MponeaddpaymentComponent } from './mponecomponents/mponeaddpayment/mponeaddpayment.component';
import { MponelistpaymentsComponent } from './mponecomponents/mponelistpayments/mponelistpayments.component';

const routes: Routes = [
  { path: '', component:MponehomeComponent},

  { path: 'mponeaddproducts', component : MponeaddpaymentComponent},
  { path: 'mponelistproducts', component: MponelistpaymentsComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniprojectoneroutingRoutingModule { }
