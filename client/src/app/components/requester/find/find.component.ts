import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetSuitableVolunteers } from 'src/app/shared/models/GetSuitableVolunteers';
import { HelpRequests } from 'src/app/shared/models/HelpRequests.model';
import { VolunteeringForUsers } from 'src/app/shared/models/VolunteeringForUsers.model';
import { HelpRequestsService } from 'src/app/shared/services/help-requests.service';
import { EDays } from '../../volunteer/types-of-volunteering/types-of-volunteering.component';

@Component({
  selector: 'find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  // @Input() helpRequest: HelpRequests = new HelpRequests();
  // volunteers: VolunteeringForUsers[] = [];
  @Input() volunteers: GetSuitableVolunteers[] = [];

  constructor( private router:Router, private helpRequesService: HelpRequestsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // this.getVolunteersForHelpRequest();
    // console.log(this.helpRequest);
  }

  convertList(list: string) {
    let arr = list.split(',');
    return arr.map(value => this.convertToDays(Number(value)));
  }

  convertToDays(value: number) {
    return EDays[value];
  }

  // getVolunteersForHelpRequest()
  // {
  //   this.helpRequesService.getVolunteersForHelpRequest(this.helpRequest)
  //   .subscribe(list => this.volunteers = list, 
  //     err => console.log(err));
  // }

}
