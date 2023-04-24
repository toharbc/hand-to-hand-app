import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetVolunteeringDetailsOfUser } from '../models/GetVolunteeringDetailsOfUser';
import { GetVolunteeringsByVolunteer } from '../models/GetVolunteeringsByVolunteer';
import { GetVolunteeringsByRequester } from '../models/GetVolunteeringsByRequester'
import { GetCommentToVolunteer } from '../models/GetCommentToVolunteer';
import { Rating } from '../models/Rating';
import { Volunteer } from '../models/Volunteer';
import { Users } from '../models/Users.model';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(public http:HttpClient) { }

  public GetVolunteeringDetailsOfUser(userId: number): Observable<GetVolunteeringDetailsOfUser[]> {
    return this.http.get<GetVolunteeringDetailsOfUser[]>(`${environment.serverUrl}Users/GetVolunteeringDetailsOfUser?userId=${userId}`);
  }
  public GetVolunteeringsByVolunteer(userId: number): Observable<GetVolunteeringsByVolunteer[]> {
    return this.http.get<GetVolunteeringsByVolunteer[]>(`${environment.serverUrl}Users/GetVolunteeringsByVolunteer?userId=${userId}`);
  }
  public GetVolunteeringsByRequester(userId: number): Observable<GetVolunteeringsByRequester[]> {
    return this.http.get<GetVolunteeringsByRequester[]>(`${environment.serverUrl}Users/GetVolunteeringsByRequester?userId=${userId}`);
  }
  public GetCommentToVolunteer(volunteerId: number): Observable<GetCommentToVolunteer[]> {
    return this.http.get<GetCommentToVolunteer[]>(`${environment.serverUrl}Volunteer/GetCommentToVolunteer?volunteerId=${volunteerId}`);
  }
  public GetRatingToVolunteer(volunteerId: number): Observable<Rating> {
    return this.http.get<Rating>(`${environment.serverUrl}Volunteer/GetRatingToVolunteer?volunteerId=${volunteerId}`);
  }
  public GetVolunteers(userId: number): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(`${environment.serverUrl}Volunteer/GetVolunteers?userId=${userId}`);
  }

  public GetVolunteersByType(userId: number, typeOfVolunteeringId: number): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(`${environment.serverUrl}Volunteer/GetVolunteersByType?userId=${userId}&typeOfVolunteeringId=${typeOfVolunteeringId}`);
  }

  public GetDetailsOfVolunteer(volunteerId: number): Observable<Users> {
    return this.http.get<Users>(`${environment.serverUrl}Volunteer/GetDetailsOfVolunteer?volunteerId=${volunteerId}`);
  }
}
