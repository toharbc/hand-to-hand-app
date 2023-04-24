import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetVolunteeringDetailsOfUser } from 'src/app/shared/models/GetVolunteeringDetailsOfUser';
import { GetVolunteeringsByVolunteer } from 'src/app/shared/models/GetVolunteeringsByVolunteer';
import { Users } from 'src/app/shared/models/Users.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { VolunteerService } from 'src/app/shared/services/volunteer.service';

@Component({
  selector: 'mitnadev',
  templateUrl: './mitnadev.component.html',
  styleUrls: ['./mitnadev.component.css']
})
export class MitnadevComponent implements OnInit {

  user: Users = new Users();
  isLogin = false;
  userId: number = -1;
  data: GetVolunteeringDetailsOfUser[] = [];
  volunteerings: GetVolunteeringsByVolunteer[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private userService: UsersService, private volunteerService: VolunteerService) {
    // this.user.UserFirstName = 'שמעון';
    // this.user.UserLastName = 'לוי';
    // this.user.UserAdress = 'בני ברק';
    if (this.activatedRoute.snapshot.params.userId != undefined) {
      this.isLogin = true;
      this.userId = Number(this.activatedRoute.snapshot.params.userId);
      this.getDetailsOfCurrentUser(this.userId);
    }
  }

  ngOnInit(): void {
  }

  getDetailsOfCurrentUser(userId: number) {
    // מביאה את הפרטים האישיים של המתנדב
    this.userService.getUser(userId).subscribe(user => this.user = user);
    // מביאה את טבלת סוגי ההתנדבויות של המתנדב
    this.volunteerService.GetVolunteeringDetailsOfUser(userId)
      .subscribe(data => {
        this.data = data
        console.log(this.data);
      });
    // מביאה את טבלת ההתנדבויות של המתנדב
    this.volunteerService.GetVolunteeringsByVolunteer(userId)
      .subscribe(data => {
        console.log(data);
        this.volunteerings = data
      });
  }

  register(): void {
    this.router.navigateByUrl('register');
  }

  login(): void {
    this.router.navigateByUrl('login');
  }
  //התנתק מהאתר
  go() {
    this.router.navigate(['/go']);
  }
  //עדכון פרטים
  update() {
    this.router.navigate(['/personal-information']);
  }
  //הוסף התנדבות
  addTypeOfVolunteering() {
    this.router.navigate([`/volunteer-detailes/${this.userId}`])
  }

  openCommits() {
    this.router.navigateByUrl(`/commits/${this.userId}`);
  }

}
