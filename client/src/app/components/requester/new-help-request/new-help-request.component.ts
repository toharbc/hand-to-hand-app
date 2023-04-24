import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GetSuitableVolunteers } from 'src/app/shared/models/GetSuitableVolunteers';
import { Volunteer } from 'src/app/shared/models/Volunteer';
import { Volunteering } from 'src/app/shared/models/Volunteering';
import { TypeOfVolunteeringForUsersService } from 'src/app/shared/services/type-of-volunteering-for-users.service';
import { VolunteerService } from 'src/app/shared/services/volunteer.service';
import { VolunteeringService } from 'src/app/shared/services/volunteering.service';
import { HelpRequests } from '../../../shared/models/HelpRequests.model';
import { TypeOfVolunteering } from '../../../shared/models/TypeOfVolunteering.model';
import { HelpRequestsService } from '../../../shared/services/help-requests.service';
import { TypeOfVolunteeringService } from '../../../shared/services/type-of-volunteering.service';
import { EDays } from '../../volunteer/types-of-volunteering/types-of-volunteering.component';

@Component({
  selector: 'new-help-request',
  templateUrl: './new-help-request.component.html',
  styleUrls: ['./new-help-request.component.css']
})
export class NewHelpRequestComponent implements OnInit {

  // helpRequest : Volunteering = new Volunteering();
  // typesOfVolunteering:TypeOfVolunteering[]=[];
  // isShowFind: boolean = false;
  // volunteering: Volunteering = new Volunteering();
  // volunteers: GetSuitableVolunteers[] = [];

  typeFormGroup: FormGroup;
  filterFormGroup: FormGroup;
  volunteerFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  timeForVolunFormGroup: FormGroup;

  volunteers: Volunteer[] = [];
  suitableVolunteers: Volunteer[] = [];
  userId: number = -1;
  selectedVolunteer: Volunteer = new Volunteer();
  types: TypeOfVolunteering[] = [];
  isFiltered = false;
  daysList: string[] = [];

  constructor(private helpRequestService: HelpRequestsService,
    private typeOfVolenteeringService: TypeOfVolunteeringService,
    private router: Router, private volunteeringService: VolunteeringService,
    private _formBuilder: FormBuilder, private volunteerService: VolunteerService,
    private activatedRoute: ActivatedRoute,
    private typeOfVolunteering_ForUsersService: TypeOfVolunteeringForUsersService,
    private _snackBar: MatSnackBar) {
    if (this.activatedRoute.snapshot.params.id != undefined) {
      this.userId = Number(this.activatedRoute.snapshot.params.id);
    }
    this.typeFormGroup = this._formBuilder.group({
      typeId: ['', Validators.required]
    });
    this.filterFormGroup = this._formBuilder.group({
      startHour: ['', Validators.required],
      endHour: ['', Validators.required],
    });
    this.volunteerFormGroup = this._formBuilder.group({
      volunteer: ['', Validators.required],
      volunteerId: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
    this.timeForVolunFormGroup = this._formBuilder.group({
      days: ['', Validators.required],
      startHour: ['', Validators.required],
      endHour: ['', Validators.required],
    });
    this.getvolunteeringTypes();
  }

  ngOnInit(): void {
    //  this.typeOfVolenteeringService.getAllTypeOfVolunteerings().subscribe(
    //   res=>{this.typesOfVolunteering=res;console.log(this.typesOfVolunteering)}
    // );
  }

  getSuitableVolunteers() {
    if (this.typeFormGroup.valid) {
      this.volunteerService.GetVolunteersByType(this.userId, this.typeFormGroup.controls.typeId.value)
        .subscribe(list => {
          this.volunteers = list;
          this.suitableVolunteers = this.volunteers;
        }, err => console.log(err));
    }
  }

  getvolunteeringTypes() {
    this.typeOfVolenteeringService.getAllTypeOfVolunteerings()
      .subscribe(list => this.types = list,
        err => console.log(err));
  }

  filterByHours() {
    if (this.filterFormGroup.valid) {
      let d = new Date();
      let dString = d.toLocaleDateString() + ' ';
      this.suitableVolunteers = this.volunteers.filter(vol =>
        Date.parse(dString + vol.startHour) <=
        Date.parse(dString + this.filterFormGroup.controls.startHour.value) &&
        Date.parse(dString + vol.endHour) >=
        Date.parse(dString + this.filterFormGroup.controls.endHour.value));
      this.isFiltered = true;
    }
  }

  clearFilter() {
    this.suitableVolunteers = this.volunteers;
    this.isFiltered = false;
  }

  getSelectedVolunteers() {
    this.selectedVolunteer = new Volunteer();
    this.volunteers.forEach(vol => {
      if (vol.UserId == this.volunteerFormGroup.controls.volunteerId.value) {
        this.selectedVolunteer = vol;
      }
    });
  }

  selectVolunteer(event: any) {
    this.selectedVolunteer = event;
    this.volunteerFormGroup.controls.volunteer.setValue(event.UserFirstName + ' ' + event.UserLastName);
    this.volunteerFormGroup.controls.volunteerId.setValue(event.UserId);
    this.daysList = this.convertList(this.selectedVolunteer.days);
  }

  convertList(list: string) {
    let arr = list.split(',');
    return arr.map(value => this.convertToDays(Number(value)));
  }

  convertToDays(value: number) {
    return EDays[value];
  }

  getDays(list: string[]): string {
    return list.map((day: string) => this.daysList.indexOf(day) + 1).join(',');
  }

  sendRequestToVolunteer() {
    let volunteerId = this.volunteerFormGroup.controls.volunteerId.value;
    let typeId = this.typeFormGroup.controls.typeId.value;
    let volunteering = new Volunteering();
    volunteering.requesterId = this.userId;
    if (this.isFiltered && this.filterFormGroup.valid) {
      volunteering.startHour = this.filterFormGroup.controls.startHour.value;
      volunteering.endHour = this.filterFormGroup.controls.endHour.value;
    }
    volunteering.startDate = this.secondFormGroup.controls.startDate.value;
    volunteering.endDate = this.secondFormGroup.controls.endDate.value;
    volunteering.days = this.getDays(this.timeForVolunFormGroup.controls.days.value);
    volunteering.startHour = this.timeForVolunFormGroup.controls.startHour.value;
    volunteering.endHour = this.timeForVolunFormGroup.controls.endHour.value;
    this.typeOfVolunteering_ForUsersService.GetTypeOfVolunteeringId(volunteerId, typeId)
      .subscribe(typeOfVolunteering_ForUsersId => {
        volunteering.typeOfVolunteering_ForUsersId = typeOfVolunteering_ForUsersId;
        this.addVolunteering(volunteering);
      }, err => console.log(err));

  }

  addVolunteering(volunteering: Volunteering) {
    this.volunteeringService.AddVolunteering(volunteering)
      .subscribe(res => {
        if (res) {
          this.openSnackBar('הבקשה נוספה בהצלחה');
        } else this.openSnackBar('קרתה תקלה בהוספת הבקשה');
        this.router.navigateByUrl(`/need-help/${this.userId}`);
      }, err => console.log(err));
  }

  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['custom-snackbar'];
    config.direction = 'rtl';
    this._snackBar.open(message, 'הבנתי', config);
  }

  // setStartHour(e: any) {
  //   this.volunteering.startHour = e.target.value;
  // }

  // setEndHour(e: any) {
  //   this.volunteering.endHour = e.target.value;
  // }



  // newHelpRequest()
  // {
  //   console.log(this.helpRequest)
  //   // this.helpRequestService.AddHelpRequest(this.helpRequest).subscribe(
  //   //   res=>console.log(res),
  //   //   err=>console.error(err)
  //   //   );

  // }
  // requesterRequests(){
  //   this.router.navigate(['/requester-requests'])
  // }
  // findVolunteer(){
  //     this.volunteeringService.GetSuitableVolunteers(this.volunteering.typeOfVolunteeringId, 
  //       this.volunteering.startHour, this.volunteering.endHour)
  //     .subscribe(list => {
  //       this.volunteers = list;
  //       this.isShowFind = true;
  //     }, err => console.log(err));
  // }


}


