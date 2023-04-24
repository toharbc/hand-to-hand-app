import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { RequestsForVolunteer } from '../models/RequestsForVolunteer.model';
import { Observable } from 'rxjs';
import { VolunteeringForUsers } from '../models/VolunteeringForUsers.model';
@Injectable({
  providedIn: 'root'
})
export class RequestsForVolunteerService {
url='https://localhost:44350/API/VolunteeringForUsers'
  constructor(public http:HttpClient) { }

  getAllRequestsForVolunteer():Observable<RequestsForVolunteer[]>
  {
    return this.http.get<RequestsForVolunteer[]>('');
  }
  findVolunteerForNeedHelp( id:number  ){
   
    return this.http.get<VolunteeringForUsers[]>(this.url+'/findVolunteerForNeedHelp'); 

  }
}
