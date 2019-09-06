import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { Client } from './client';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpRequest} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { Events } from './events';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  clients: Client[];
  events: Events[];
  event: Events;

  constructor(private _http: HttpClient) { }

  getService() : Observable<Client[] >
  {
    return this._http.get<Client[]>("/EventBasedCalendar/view");
  }
  InsertClient(client: Client): Observable<any>
  {
    console.log("In Serv Insert" + client.clientName );

    return this._http.post("/EventBasedCalendar/submitOnDb", client).pipe(map((res: Response) => res), catchError(this.errorhandler));
  }

  errorhandler(error: Response)
{
  console.log(error.status);
  console.log(error);
   return throwError(error);
}
private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

getEventsById(clientId: number): Observable<Events[]>
{
  return this._http.get<Events[]>("/EventBasedCalendar/viewClientEvent/" + clientId);
}
InsertEvent( event: Event): Observable<any>
{
  return this._http.post("", event).pipe(map((res: Response) => res), catchError(this.errorhandler));
}

}
