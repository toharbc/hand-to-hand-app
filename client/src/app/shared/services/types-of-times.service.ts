import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TypesOfTimesService {

  constructor(public http:HttpClient) { }
}
