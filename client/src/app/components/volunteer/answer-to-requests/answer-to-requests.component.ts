import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'answer-to-requests',
  templateUrl: './answer-to-requests.component.html',
  styleUrls: ['./answer-to-requests.component.css']
})
export class AnswerToRequestsComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

}
