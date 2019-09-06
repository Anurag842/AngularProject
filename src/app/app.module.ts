import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModModule, RoutesTable} from './router-mod/router-mod.module';
import { NavigateComponent } from './navigate/navigate.component';


@NgModule({
  declarations: [
    AppComponent,NavigateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , FormsModule, RouterModModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(RoutesTable)
    //RouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
