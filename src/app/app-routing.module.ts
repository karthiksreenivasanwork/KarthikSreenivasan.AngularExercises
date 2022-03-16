import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListproductsComponent } from "./listproducts/listproducts.component";
import { ProducttrackingComponent } from "./producttracking/producttracking.component";

// sets up routes constant where you define your routes
const routes: Routes = [
    { path: 'producttracking', component: ProducttrackingComponent },
    { path: 'listproducts', component: ListproductsComponent },
    { path: "**", redirectTo: "producttracking" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
