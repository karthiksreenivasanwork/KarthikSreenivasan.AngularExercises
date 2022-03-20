import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProducttrackingComponent } from './producttracking/producttracking.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { FormsModule } from '@angular/forms';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';


@NgModule({
  declarations: [
    AppComponent,
    ProducttrackingComponent,
    ListproductsComponent,
    NgSwitchDirectiveComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
