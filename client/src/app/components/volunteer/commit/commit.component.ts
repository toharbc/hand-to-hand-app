import { Component, Input, OnInit } from '@angular/core';
import { GetCommentToVolunteer } from 'src/app/shared/models/GetCommentToVolunteer';

@Component({
  selector: 'commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {

  // @Input() name: string = '';
  // @Input() date: Date = new Date();
  // @Input() commit: string = '';
  @Input() comment: GetCommentToVolunteer = new GetCommentToVolunteer();

  constructor() { }

  ngOnInit(): void {
  }

}
