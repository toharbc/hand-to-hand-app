import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from './shared/services/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor() { }

  ngOnInit(): void {
  }
}


