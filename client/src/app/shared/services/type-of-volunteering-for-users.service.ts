import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetVolunteeringDetailsOfUser } from '../models/GetVolunteeringDetailsOfUser';
import { TypeOfVolunteering_ForUsers } from '../models/TypeOfVolunteering_ForUsers';

@Injectable({
  providedIn: 'root'
})
export class TypeOfVolunteeringForUsersService {

  private controller = "TypeOfVolunteering_ForUsers/";

  constructor(private http: HttpClient) { }

  AddTypeOfVolunteering_ForUser(typeOfVolunteering: TypeOfVolunteering_ForUsers): Observable<boolean>
  {
    return this.http.post<boolean>
    (`${environment.serverUrl}${this.controller}AddTypeOfVolunteering_ForUser`, typeOfVolunteering);
  }
  UpdateTypeOfVolunteering_ForUser(typeOfVolunteering: GetVolunteeringDetailsOfUser): Observable<boolean> 
  {
    return this.http.put<boolean>(`${environment.serverUrl}${this.controller}UpdateTypeOfVolunteering_ForUser`, typeOfVolunteering);
  }
  DeleteTypeOfVolunteering_ForUser(id: number): Observable<boolean> 
  {
    return this.http.delete<boolean>(`${environment.serverUrl}${this.controller}DeleteTypeOfVolunteering_ForUser?id=${id}`);
  }
  GetTypeOfVolunteeringId(volunteerId: number, typeId: number): Observable<number>{
    return this.http.get<number>(`${environment.serverUrl}TypeOfVolunteering_ForUsers/GetTypeOfVolunteeringId?volunteerId=${volunteerId}&typeId=${typeId}`);
  }
}
