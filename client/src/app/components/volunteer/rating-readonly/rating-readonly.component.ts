import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Rating } from 'src/app/shared/models/Rating';

@Component({
  selector: 'rating-readonly',
  templateUrl: './rating-readonly.component.html',
  styleUrls: ['./rating-readonly.component.css']
})
export class RatingReadonlyComponent implements OnInit {

  @Input() currentRate: Rating = new Rating();

  constructor(private config: NgbRatingConfig) {
    this.config.max = 10;
    // this.config.readonly = true;
  }

  ngOnInit(): void {
  }

}
