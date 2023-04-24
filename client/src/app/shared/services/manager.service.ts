import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(public http:HttpClient) { }

  
}
