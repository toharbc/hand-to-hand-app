import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { VolunteeringForUsers } from '../models/VolunteeringForUsers.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VolunteeringForUsersService {

  constructor(public http:HttpClient) { }

  getAllVolunteeringForUsers():Observable<VolunteeringForUsers[]>
  {
    return this.http.get<VolunteeringForUsers[]>(environment.serverUrl+'VolunteeringForUsers');
  }
 // getAllAreas():Observable<Areas[]>
  //{
    //return this.http.get<Areas[]>(environment.serverUrl+'VolunteeringForUsers');
  //}
  
}
