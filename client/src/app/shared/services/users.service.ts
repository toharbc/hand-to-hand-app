import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {Users} from './../models/Users.model'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginAnswer } from 'src/app/components/shared/login/login.component';

export enum ETypeUser {
  Volunteer, HelpRequest, Other
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http:HttpClient) { }

  addUser(user:Users):Observable<number>
  {
    return this.http.post<number>(`${environment.serverUrl}users`,user)
  }

  login(mail:string,password:string): Observable<Users>
  {
    return this.http.get<Users>(`${environment.serverUrl}users/Login?mail=${mail}&password=${password}`)
  }

  checkType(userId: number): Observable<ETypeUser> {
    return this.http.get<ETypeUser>(`${environment.serverUrl}users/CheckType?userId=${userId}`);
  }

  getUser(userId: number): Observable<Users> {
    return this.http.get<Users>(`${environment.serverUrl}users/GetUser?userId=${userId}`);
  }
 
  updateUser(userId: number, updatedUser: Users): Observable<boolean> {
    return this.http.put<boolean>(`${environment.serverUrl}Users/UpdateUesr`, updatedUser);
  }

}
