import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TypeOfVolunteering } from '../models/TypeOfVolunteering.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TypeOfVolunteeringService {

  constructor(public http:HttpClient) { }

  getAllTypeOfVolunteerings(): Observable<TypeOfVolunteering[]>
  {
    return this.http.get<TypeOfVolunteering[]>(environment.serverUrl+'TypeOfVolunteering')
  }

  getTypeOfVolunteeringById(typeId: number): Observable<TypeOfVolunteering> {
    return this.http.get<TypeOfVolunteering>(environment.serverUrl+'TypeOfVolunteering/GetTypeOfVolunteeringById?typeId=' + typeId);
  }

  addTypeOfVolunteering(typeOfVoluntering: TypeOfVolunteering): Observable<TypeOfVolunteering> {
    return this.http.post<TypeOfVolunteering>(`${environment.serverUrl}TypeOfVolunteering/AddTypeOfVolunteering`, typeOfVoluntering);
  }
}
