import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { CalendarService } from '../calendar.service';
import {HttpClient} from '@angular/common/http';
import { getDefaultService } from 'selenium-webdriver/edge';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {
  clients: Client[];

  constructor(private service: CalendarService) {}
    getServ(): Client[]{
      this.service.getService().subscribe(data => this.clients = data);
      return this.clients;
    }
    ngOnInit() {
      this.clients = this.getServ();
   }
}
