import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'type-of-volunteering',
  templateUrl: './type-of-volunteering.component.html',
  styleUrls: ['./type-of-volunteering.component.css']
})
export class TypeOfVolunteeringComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

}
