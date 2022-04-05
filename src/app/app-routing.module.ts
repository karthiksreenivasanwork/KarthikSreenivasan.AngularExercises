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
  { path: 'ex1binding', component: ProducttrackingComponent },
  { path: 'ex2directive', component: ListproductsComponent },
  { path: 'ex3ngswitch', component: NgSwitchDirectiveComponent },
  { path: 'ex4miniprojectone', loadChildren: () => MiniprojectoneModule },
  { path: 'ex5texttransformer', component: TexttransformComponent },
  {
    path: 'ex6componentinterations',
    component: ComponentinteractionsComponent,
  },
  { path: '**', redirectTo: 'ex4miniprojectone' }, //Load the mini project by default.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
