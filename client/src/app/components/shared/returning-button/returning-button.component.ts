import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'returning-button',
  templateUrl: './returning-button.component.html',
  styleUrls: ['./returning-button.component.css']
})
export class ReturningButtonComponent implements OnInit {

  @Input() userId: number = -1;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returning() {
    this.router.navigateByUrl(Boolean(sessionStorage.getItem('isVolunteer')) ? 
      `/mitnadev/${this.userId}` : `/need-help/${this.userId}`);
  }

}
