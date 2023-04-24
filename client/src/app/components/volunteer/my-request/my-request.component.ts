import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { TypeOfVolunteeringService } from 'src/app/shared/services/type-of-volunteering.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { HelpRequests } from '../../../shared/models/HelpRequests.model';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { GetVolunteeringsByVolunteer } from 'src/app/shared/models/GetVolunteeringsByVolunteer';

export class FullHelpRequest {
  Id?: number;
  UserName?: string;
  TypeOfVolunteering?: string;
  StartDate?: Date;
  EndDate?: Date;
  StartHour?: string;
  EndHour?: string;
}

export interface DialogData {
  volunteering: any;
}

@Component({
  selector: 'my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {

  @Input() volunteerings: GetVolunteeringsByVolunteer = [];

  displayedColumns: string[] = ['ReqName', 'TypeOfVolunteeringName', 'Status', 'open'];
  dataSource: any = [];

  helpRequests: HelpRequests[] = [];
  fullHelpRequests: FullHelpRequest[] = [];
  constructor(public route: Router,
    private userService: UsersService,
    private typeOfVolunteeringService: TypeOfVolunteeringService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.dataSource = this.volunteerings;
  }

  openDialog(volunteering: GetVolunteeringsByVolunteer): void {
    this.dialog.open(RequestDialogComponent, {
      width: '350px', 
      data: { volunteering: volunteering }
    });
  }

    convertToFullHelpRequest(helpRequests: HelpRequests[]) {
    helpRequests.forEach(element => {
      let fullHelpRequest = new FullHelpRequest();
      fullHelpRequest.Id = element.HelpRequestId;
      // מביאים את השם של המשתמש לפי ההידי-המזהה
      this.getUserName(element.RequesterId)
        .subscribe(res => fullHelpRequest.UserName = res);
      // מביאים את השם של סוג ההתנדבות לפי המזהה
      this.getTypeOfVolunteering(element.TypeOfVolunteerId)
      .subscribe(res => fullHelpRequest.TypeOfVolunteering = res);
      fullHelpRequest.StartDate = element.StartDate;
      fullHelpRequest.EndDate = element.EndDate;
      fullHelpRequest.StartHour = element.StartHour;
      fullHelpRequest.EndHour = element.EndHour;
      this.fullHelpRequests.push(fullHelpRequest);
    });
  }

  getUserName(userId?: number): Observable<string> {
    let userName = '';
    let subject = new Subject<string>();
    if (userId != undefined) {
      this.userService.getUser(userId)
        .subscribe(res => {
          userName = res.UserFirstName + ' ' + res.UserLastName;
          subject.next(userName);
        });
    }
    return subject.asObservable();
  }

  getTypeOfVolunteering(typeId?: number): Observable<string> {
    let subject = new Subject<string>();
    if (typeId != undefined) {
      this.typeOfVolunteeringService.getTypeOfVolunteeringById(typeId)
        .subscribe(res => {
          subject.next(res.TypeOfVolunteeringName);
        });
    }
    return subject.asObservable();
  }



}
