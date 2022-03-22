import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MponeaddproductsComponent } from './mponecomponents/mponeaddproducts/mponeaddproducts.component';
import { MponelistproductsComponent } from './mponecomponents/mponelistproducts/mponelistproducts.component';
import { MponehomeComponent } from './mponehome.component';

const routes: Routes = [
  { path: '', component:MponehomeComponent},

  { path: 'mponeaddproducts', component: MponeaddproductsComponent},
  { path: 'mponelistproducts', component: MponelistproductsComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniprojectoneroutingRoutingModule { }
