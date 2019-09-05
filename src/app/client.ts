export class Client {
    clientId: number;
    account: string;
    clientName: string;
    projectName: string;
    arrivalDate: Date;
    deptDate: Date;
    agenda: string;
    stringdepart: string;
    stringarrive: string;
    eventData: string;
    constructor(clientId: number, account: string, clientName: string, projectName: string, arrivalDate: Date, deptDate: Date, agenda: string, stringdepart: string, stringarrive: string,eventData: string)
    {
        this.clientId = clientId;
        this.account = account;
        this.clientName = clientName;
        this.projectName = projectName;
        this.arrivalDate = arrivalDate;
        this.deptDate = deptDate;
        this.agenda = agenda;
        this.stringarrive = stringarrive;
        this.stringdepart = stringdepart;
        this.eventData = eventData;
    }



}
