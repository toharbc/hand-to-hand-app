import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../../../shared/services/routing.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  isdisable:boolean=true

  constructor(private router:Router,
    public routingService:RoutingService) { }

 // saveNextRoute(route:string)
  //{
    //this.routingService.NextRoute=route;
  //}

  ngOnInit(): void {
  }
  
  mitnadev()
  {
  //this.isdisable=false
  this.router.navigate(['/mitnadev'])
  }
  needHelp() 
  {
 // this.isdisable=false
  this.router.navigate(['/need-help'])
  
  }



}
