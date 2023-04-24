import { Component, OnInit } from '@angular/core';
import { VolunteeringForUsers } from 'src/app/shared/models/VolunteeringForUsers.model';

@Component({
  selector: 'results-of-searching',
  templateUrl: './results-of-searching.component.html',
  styleUrls: ['./results-of-searching.component.css']
})
export class ResultsOfSearchingComponent implements OnInit {

  volunteers: VolunteeringForUsers[] = [];

  constructor() { 
    let volunteer = new VolunteeringForUsers();
    volunteer.UserId = 1;
    volunteer.UserName = "שמעון לוי";
    volunteer.UserLocation = "בני ברק";
    volunteer.TypeOfVolunteerId = 1;
    volunteer.TypeOfVolunteerName = "מורה פרטי";
    this.volunteers.push(volunteer);
    
    let volunteer1 = new VolunteeringForUsers();
    volunteer1.UserId = 2;
    volunteer1.UserName = "יהודה כהן";
    volunteer1.UserLocation = "ירושלים";
    volunteer1.TypeOfVolunteerId = 2;
    volunteer1.TypeOfVolunteerName = "בישול";
    this.volunteers.push(volunteer1);
  }

  ngOnInit(): void {
  }

  open(volunteer: VolunteeringForUsers) {
    
  }

}
