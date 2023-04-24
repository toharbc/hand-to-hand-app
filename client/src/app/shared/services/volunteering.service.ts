import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetSuitableVolunteers } from '../models/GetSuitableVolunteers';
import { Volunteering } from '../models/Volunteering';

@Injectable({
  providedIn: 'root'
})
export class VolunteeringService {

  constructor(private http: HttpClient) { }

  public SaveRatingToVolunteering(volunteeringId: number, rating: number): Observable<boolean> {
    return this.http.put<boolean>(`${environment.serverUrl}Volunteering/SaveRatingToVolunteering?volunteeringId=${volunteeringId}`, rating);
  }

  public SendCommentToVolunteering(volunteeringId: number, comment: string): Observable<boolean> {
    return this.http.put<boolean>(`${environment.serverUrl}Volunteering/SendCommentToVolunteering?volunteeringId=${volunteeringId}&comment=${comment}`, null);
  }

  public GetSuitableVolunteers(typeOfVolunteeringId: number, startHour: any, endHour: any): Observable<GetSuitableVolunteers[]> {
    return this.http.get<GetSuitableVolunteers[]>(`${environment.serverUrl}Volunteering/GetSuitableVolunteers?typeOfVolunteeringId=${typeOfVolunteeringId}&startHour=${startHour.length > 0 ? startHour : null}&endHour=${endHour.length > 0 ? endHour : null}`);
  }

  public ChangeStatusToVolunteering(volunteeringId: number, status: number): Observable<boolean> {
    return this.http.put<boolean>(`${environment.serverUrl}Volunteering/ChangeStatusToVolunteering?volunteeringId=${volunteeringId}&status=${status}`, status);
  }

  public AddVolunteering(volunteering: Volunteering): Observable<boolean> {
    return this.http.post<boolean>(`${environment.serverUrl}Volunteering/AddVolunteering`, volunteering);
  }
}
