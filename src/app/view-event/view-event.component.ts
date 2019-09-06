import { Component, OnInit } from '@angular/core';
import { Events } from '../events';
import { CalendarService } from '../calendar.service';
import { Client } from '../client';
import {  ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  events: Events[];
  clientId: number;
  client: Client;

  constructor(private service: CalendarService, private _ActivatedRoute : ActivatedRoute  ) {}
    getEvent(): Events[]{
      this.service.getEventsById(this.clientId).subscribe(data => this.events = data);
      return this.events;
    }
    ngOnInit() {
     
      this._ActivatedRoute.paramMap.subscribe(params => { 
        this.clientId = Number(params.get('clientId')); 
    });
    console.log("ID IS " + this.clientId);
    this.events = this.getEvent();
    
   }

}


 