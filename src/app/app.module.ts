import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Ex# 1: Binding
import { ProducttrackingComponent } from './codingexercises/ex1_producttracking/producttracking.component';
//Ex# 2: Directives
import { ListproductsComponent } from './codingexercises/ex2_listproducts/listproducts.component';
//Ex# 3: ngSwitch Directive
import { NgSwitchDirectiveComponent } from './codingexercises/ex3_ng-switch-directive/ng-switch-directive.component';

//Exercise 4: Mini project which is a feature module and hence not defined here.

//Exercise 5: Text Transformation
import { TexttransformComponent } from './codingexercises/ex5_texttransform/texttransform.component';
import { TtordinalpipePipe } from './codingexercises/ex5_texttransform/texttransformpipes/ttordinalpipe.pipe';
import { TtcleanwordPipe } from './codingexercises/ex5_texttransform/texttransformpipes/ttcleanword.pipe';
import { TtCaseChangerPipe } from './codingexercises/ex5_texttransform/texttransformpipes/ttcasechanger.pipe';
import { TtreversestringPipe } from './codingexercises/ex5_texttransform/texttransformpipes/ttreversestring.pipe';

//Exercise 6: Component Interactions
import { ComponentinteractionsComponent } from './codingexercises/ex6_componentinteractions/componentinteractions.component';
import { CiactivecproductsComponent } from './codingexercises/ex6_componentinteractions/ciactivecproducts/ciactivecproducts.component';
import { CiinactivecproductsComponent } from './codingexercises/ex6_componentinteractions/ciinactivecproducts/ciinactivecproducts.component';
import { Ex7ticketloginComponent } from './codingexercises/ex7_ticketreservationsystem/ex7ticketlogin/ex7ticketlogin.component';
import { Ex7ticketreservationComponent } from './codingexercises/ex7_ticketreservationsystem/ex7ticketreservation.component';
import { Ex7passengersComponent } from './codingexercises/ex7_ticketreservationsystem/ex7passengers/ex7passengers.component';

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
    Ex7ticketloginComponent,
    Ex7ticketreservationComponent,
    Ex7passengersComponent,
  ],
  imports: [
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
