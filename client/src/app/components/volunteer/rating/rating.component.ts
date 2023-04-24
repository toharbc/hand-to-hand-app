import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating = 0;
  @Output() onRatingChange = new EventEmitter<number>();
  _currentRate = -1;
  set currentRate(value: number) {
    this._currentRate = value;
    this.onRatingChange.emit(value);
  }
  // @Input() readonly = false;


  constructor(public route: Router, private config: NgbRatingConfig) {
  }

  updateRate(value: any) {
    this.onRatingChange.emit(value);
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.config.readonly = false;
    this._currentRate = this.rating;
  }

}
