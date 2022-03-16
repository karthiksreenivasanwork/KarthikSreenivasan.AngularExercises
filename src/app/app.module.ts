import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProducttrackingComponent } from './producttracking/producttracking.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducttrackingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
