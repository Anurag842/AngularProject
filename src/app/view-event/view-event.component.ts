import { Component, OnInit } from '@angular/core';
import { Events } from '../events';
import { CalendarService } from '../calendar.service';
import { Client } from '../client';
import {  ActivatedRoute} from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ThrowStmt } from '@angular/compiler';

import { constrainPoint } from '@fullcalendar/core';

// let calendarEvents:Events[]=[

// ];



@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent  {
  event:Events;
  
  calendarPlugins = [dayGridPlugin];

  handleDateClick(arg) { // handler method
     
    alert(arg.dateStr);
  }
    events: Events[];
    events2: Events[];
   clientId: number;
  // client: Client;
 
  

  constructor(private service: CalendarService, private _ActivatedRoute : ActivatedRoute  ) {

   
  }

  
    getEvent(){
      this.service.getEventsById(this.clientId).subscribe((data) => {
        console.log('Fetching Result');
        this.events=data;
        console.log(this.events);
        
      });
        
    }
    
      ngOnInit() {
        this._ActivatedRoute.paramMap.subscribe(params => { 
          this.clientId = Number(params.get('clientId')); })
          
       
        this.getEvent();
      }

      // fetchData(){
      //   console.log('In fetch Data');
      //   console.log(this.events);

      //   for(let i=0;i<this.events.length;i++){
      //      console.log(this.events[i].title);
      //      console.log(this.events[i].start);
      //      console.log(this.events[i].end);

      //     this.event=new Events();
      //     this.event.title=this.events[i].title;
      //     this.event.start=this.events[i].start;
      //     this.event.end=this.events[i].end;
      //     this.event.eventId=this.events[i].eventId;
      //     this.event.cli=this.events[i].cli;

      //     calendarEvents.push(this.event);

          
      //   }
      //   console.log(calendarEvents);

      // }
    

      

  //     
  //   });
  //   console.log("ID IS " + this.clientId);
  //   this.events = this.getEvent();
    
  //  }

  

}
