import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CalendarService } from '../calendar.service';
import { Observable } from 'rxjs';
import { Client } from '../client';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client;
  clients: Client[];
  InsertClientForm: FormGroup;

  constructor(private service: CalendarService, private fb: FormBuilder ) {}
  getServ(): Client[]{
    this.service.getService().subscribe(data => this.clients = data);
    return this.clients;
  }

  
  ngOnInit() {
    this.InsertClientForm = this.fb.group({
      'clientId' : [],
      'account':[],
      'clientName' : [],
      'stringdepart': [],
      'projectName': [],
      'arrivalDate': [],
      'deptDate': [],
      'agenda': [],
      'eventData': [],
      'stringarrive': [],
    });
    this.clients = this.getServ();
  }

  OnInsertClient(){
    console.log(this.InsertClientForm.value);
    let client=this.InsertClientForm.value
   
     console.log(client);
    // this.Employees =[
    //   {Id:101,name:'Priyanka',Dept:'IT',D_O_J:'10-12-2019', salary:27000},
    //   {Id:102,name:'Deepak',Dept:'Admin',D_O_J:'09-02-2016', salary:28000},
    //   {Id:103,name:'Anjali',Dept:'Facilities',D_O_J:'12-12-2018', salary:15000},
    //   {Id:104,name:'Avani',Dept:'HR',D_O_J:'08-03-2014', salary:30000},
    //   {Id:105,name:'Nilam',Dept:'IT',D_O_J:'06-02-2019', salary:29000},
    // ];
     alert(this.clients.length);
     this.service.InsertClient(client)
     .subscribe((result)=> {console.log(result)
     
   },
   error=>{
     alert(error.message);
     console.log(error.message);
   },
     ()=> {
       console.log("Insertion successfull")
     }
     );
  }

}