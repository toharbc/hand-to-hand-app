import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlockedService {

  constructor(public http:HttpClient) { }
  GetAllBlockedUsers()
  {return this.http.get('')

  }
}
