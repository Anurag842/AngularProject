import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Client } from './client';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  clients: Client[];

  constructor(private _http: HttpClient) { }

  getService() : Observable<Client[] >
  {
    return this._http.get<Client[]>("/EventBasedCalendar/view");
  }
  InsertClient(client: Client): Observable<any>
  {
    console.log("In Serv Insert" + client.clientName );
    return this._http.post("/EventBasedCalendar/view", client);
}
}
