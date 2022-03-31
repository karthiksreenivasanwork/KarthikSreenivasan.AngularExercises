import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ProducttrackingComponent } from './codingexercises/producttracking/producttracking.component';
import { ListproductsComponent } from './codingexercises/listproducts/listproducts.component';
import { NgSwitchDirectiveComponent } from './codingexercises/ng-switch-directive/ng-switch-directive.component';
import { TexttransformComponent } from './codingexercises/texttransform/texttransform.component';
import { TtordinalpipePipe } from './codingexercises/texttransform/texttransformpipes/ttordinalpipe.pipe';
import { TtcleanwordPipe } from './codingexercises/texttransform/texttransformpipes/ttcleanword.pipe';
import { TtCaseChangerPipe } from './codingexercises/texttransform/texttransformpipes/ttcasechanger.pipe';
import { TtreversestringPipe } from './codingexercises/texttransform/texttransformpipes/ttreversestring.pipe';
import { ComponentinteractionsComponent } from './codingexercises/componentinteractions/componentinteractions.component';
import { CiactivecproductsComponent } from './codingexercises/componentinteractions/ciactivecproducts/ciactivecproducts.component';
import { CiinactivecproductsComponent } from './codingexercises/componentinteractions/ciinactivecproducts/ciinactivecproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducttrackingComponent,
    ListproductsComponent,
    NgSwitchDirectiveComponent,
    TexttransformComponent,
    TtordinalpipePipe,
    TtcleanwordPipe,
    TtCaseChangerPipe,
    TtreversestringPipe,
    ComponentinteractionsComponent,
    CiactivecproductsComponent,
    CiinactivecproductsComponent,
  ],
  imports: [
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
