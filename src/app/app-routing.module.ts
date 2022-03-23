import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListproductsComponent } from "./codingexercises/listproducts/listproducts.component";
import { NgSwitchDirectiveComponent } from "./codingexercises/ng-switch-directive/ng-switch-directive.component";
import { ProducttrackingComponent } from "./codingexercises/producttracking/producttracking.component";

import { MiniprojectoneModule } from ".//miniprojectone/miniprojectone.module";

// sets up routes constant where you define your routes
const routes: Routes = [
    { path: 'exOneBinding', component: ProducttrackingComponent },
    { path: 'exTwoDirective', component: ListproductsComponent },
    { path: 'exThreengSwitch', component: NgSwitchDirectiveComponent },

    {path: 'miniprojectone', loadChildren: () => MiniprojectoneModule },
    { path: "**", redirectTo: "miniprojectone" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
