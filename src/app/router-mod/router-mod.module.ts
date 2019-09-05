import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { ViewClientComponent } from '../view-client/view-client.component';
import { AddClientComponent } from '../add-client/add-client.component';


export const RoutesTable:
Routes =
[
  {path: 'addclient', component: AddClientComponent},
  {path: 'viewclient', component: ViewClientComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [AddClientComponent, ViewClientComponent, ErrorComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  exports: [AddClientComponent, ViewClientComponent, ErrorComponent]
})
export class RouterModModule { }
