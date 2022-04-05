import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProducttrackingComponent } from './codingexercises/ex1_producttracking/producttracking.component';
import { ListproductsComponent } from './codingexercises/ex2_listproducts/listproducts.component';
import { NgSwitchDirectiveComponent } from './codingexercises/ex3_ng-switch-directive/ng-switch-directive.component';
import { MiniprojectoneModule } from './/./codingexercises/ex4_miniprojectone/miniprojectone.module';
import { TexttransformComponent } from './codingexercises/ex5_texttransform/texttransform.component';
import { ComponentinteractionsComponent } from './codingexercises/ex6_componentinteractions/componentinteractions.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'exonebinding', component: ProducttrackingComponent },
  { path: 'extwodirective', component: ListproductsComponent },
  { path: 'exthreengswitch', component: NgSwitchDirectiveComponent },
  { path: 'miniprojectone', loadChildren: () => MiniprojectoneModule }, //Ex# 4
  { path: 'exfivetexttransformer', component: TexttransformComponent },
  {
    path: 'exsixcomponentinterations',
    component: ComponentinteractionsComponent,
  },
  { path: '**', redirectTo: 'exsixcomponentinterations' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
