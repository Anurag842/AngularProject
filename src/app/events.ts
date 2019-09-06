import { Client } from './client';

export class Events {
    eventId: number;
    title: string;
    end: Date;
    start: Date;
    cli: Client;

    constructor( eventId: number,
        title: string,
        end: Date,
        start: Date,
        cli: Client){
            this.eventId = eventId;
            this.title = title;
            this.end = end;
            this.start = start;
            this.cli = cli;

    }
}
