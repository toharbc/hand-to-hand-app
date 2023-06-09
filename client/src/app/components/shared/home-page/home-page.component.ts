import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mitnadev() {
    this.router.navigate(['/mitnadev']);
  }
  needHelp() {
    this.router.navigate(['/need-help']);
  }

  register(): void {
    this.router.navigateByUrl('register');
  }

  login(): void {
    this.router.navigateByUrl('login');
  }

}
