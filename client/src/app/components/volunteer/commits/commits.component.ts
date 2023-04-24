import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCommentToVolunteer } from 'src/app/shared/models/GetCommentToVolunteer';
import { VolunteerService } from 'src/app/shared/services/volunteer.service';

@Component({
  selector: 'commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {

  comments: GetCommentToVolunteer[] = [];
  date1 = new Date("10/02/2021");
  date2 = new Date("12/10/2021");
  volunteerId: number = -1;

  constructor(private volunteerService: VolunteerService, 
    private activatedRoute: ActivatedRoute) {
    if (this.activatedRoute.snapshot.params.volunteerId != undefined) {
      this.volunteerId = Number(this.activatedRoute.snapshot.params.volunteerId);
      this.getCommentsToVolunteer(this.volunteerId);
    }
   }

  ngOnInit(): void {
  }

  getCommentsToVolunteer(volunteerId: number) {
    this.volunteerService.GetCommentToVolunteer(volunteerId)
    .subscribe(list => this.comments = list, err => console.log(err));
  }

}
