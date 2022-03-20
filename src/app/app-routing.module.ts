import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListproductsComponent } from "./listproducts/listproducts.component";
import { NgSwitchDirectiveComponent } from "./ng-switch-directive/ng-switch-directive.component";
import { ProducttrackingComponent } from "./producttracking/producttracking.component";

// sets up routes constant where you define your routes
const routes: Routes = [
    { path: 'exOneBinding', component: ProducttrackingComponent },
    { path: 'exTwoDirective', component: ListproductsComponent },
    { path: 'exThreengSwitch', component: NgSwitchDirectiveComponent },
    { path: "**", redirectTo: "exOneBinding" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
