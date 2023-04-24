import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/shared/models/Users.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { VolunteerService } from 'src/app/shared/services/volunteer.service';
import { GetVolunteeringsByRequester } from 'src/app/shared/models/GetVolunteeringsByRequester';

@Component({
  selector: 'need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.css']
})
export class NeedHelpComponent implements OnInit {

  user: Users = new Users();
  isLogin = false;
  userId: number = -1;
  requests: GetVolunteeringsByRequester[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private userService: UsersService, private volunteerService: VolunteerService) {
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
    // מביאה את טבלת ההתנדבויות שקשורות למבקש העזרה
    this.volunteerService.GetVolunteeringsByRequester(userId)
      .subscribe(data => {
        console.log(data);
        this.requests = data;
      }, err => console.log(err));
  }

  newRequest() {
    this.router.navigateByUrl(`new-help-request/${this.userId}`);
  }

}
