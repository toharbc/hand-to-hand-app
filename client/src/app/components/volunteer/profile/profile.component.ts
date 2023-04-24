import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolunteeringForUsersService } from '../../../shared/services/volunteering-for-users.service';
import { Router } from "@angular/router";
import { Users } from 'src/app/shared/models/Users.model';
import { VolunteerService } from 'src/app/shared/services/volunteer.service';
import { Rating } from 'src/app/shared/models/Rating';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: Users = new Users();
  @Input() isRating: boolean = false;
  
  isVolunteer: boolean = false;

  currentRate = 6;
  rating: Rating = new Rating();
  userId: number = -1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private volunteerService: VolunteerService) { 
    this.isVolunteer = Boolean(sessionStorage.getItem('isVolunteer'));
    if (this.activatedRoute.snapshot.params.userId != undefined) {
      this.userId = Number(this.activatedRoute.snapshot.params.userId);
    }
  }

  ngOnInit(): void {
  }

  switch() {
    this.isVolunteer = !this.isVolunteer
    sessionStorage.setItem('isVolunteer', String(this.isVolunteer));
    this.router.navigateByUrl(this.isVolunteer ? 
      `/mitnadev/${this.userId}` : `/need-help/${this.userId}`)
  }

  ngOnChanges() {
    if (this.user && this.user.UserId) {
      this.getRating(this.user.UserId);
    }
  }

  getRating(volunteerId: number = -1) {
    this.volunteerService.GetRatingToVolunteer(volunteerId)
      .subscribe(rating => {
        this.rating = rating;
        console.log(rating);
      }, err => console.log(err));
  }

  register() {
    this.router.navigate(['/register'])
  }

  updateDetails() {
    this.router.navigateByUrl(`/personal-information/${this.user.UserId}`);
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl(`/home-page`);
  }
}





