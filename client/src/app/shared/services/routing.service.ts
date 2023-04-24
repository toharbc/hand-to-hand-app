import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  _nextRoute:string='';

  get NextRoute()
  {
    return this._nextRoute;
  }

  set NextRoute(route:string)
  {
    this._nextRoute=route
  }

  constructor() { }

  saveNextRoute(nextRoute:string)
  {

  }
}
