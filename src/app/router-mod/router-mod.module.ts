import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes , ActivatedRoute} from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { ViewClientComponent } from '../view-client/view-client.component';
import { AddClientComponent } from '../add-client/add-client.component';
import { FormsModule } from '@angular/forms';
import { ViewEventComponent } from '../view-event/view-event.component';
import { FullCalendarModule } from '@fullcalendar/angular';



export const RoutesTable:
Routes =
[
  {path: 'addclient', component: AddClientComponent},
  {path: 'viewclient', component: ViewClientComponent},
  {path: 'viewevents/:clientId', component: ViewEventComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [AddClientComponent, ViewClientComponent, ErrorComponent, ViewEventComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule, FormsModule, FullCalendarModule 
  ],
  exports: [AddClientComponent, ViewClientComponent, ErrorComponent, ViewEventComponent,]
})
export class RouterModModule { }
