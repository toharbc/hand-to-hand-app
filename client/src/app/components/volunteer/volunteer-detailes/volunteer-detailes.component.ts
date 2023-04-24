import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeOfVolunteering_ForUsers } from 'src/app/shared/models/TypeOfVolunteering_ForUsers';
import { FormatingService } from 'src/app/shared/services/formating.service';
import { TypeOfVolunteeringForUsersService } from 'src/app/shared/services/type-of-volunteering-for-users.service';
import { HelpRequests } from '../../../shared/models/HelpRequests.model';
import { TypeOfVolunteering } from '../../../shared/models/TypeOfVolunteering.model';
import { TypeOfVolunteeringService } from '../../../shared/services/type-of-volunteering.service';

@Component({
  selector: 'volunteer-detailes',
  templateUrl: './volunteer-detailes.component.html',

  styleUrls: ['./volunteer-detailes.component.css']
})
export class VolunteerDetailesComponent implements OnInit {

  typesOfVolunteering: TypeOfVolunteering[] = [];
  isLogin = false;
  userId = -1;
  typeOfVolunteering_ForUsers: TypeOfVolunteering_ForUsers;
  days = new FormControl();
  daysList = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
  hours = new FormControl();
  hoursList: string[] = [];

  isAddNewType = false;
  newTypeOfVolunteering: string = '';

  newTypeControl: FormControl;

  constructor(private typeOfVolunteeringService: TypeOfVolunteeringService,
    private router: Router, private typeOfVolunteeringForUsersService: TypeOfVolunteeringForUsersService,
    private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar) {
    if (this.activatedRoute.snapshot.params.userId != undefined) {
      this.isLogin = true;
      this.userId = Number(this.activatedRoute.snapshot.params.userId);
    }
    let date: Date = new Date();
    this.typeOfVolunteering_ForUsers = new TypeOfVolunteering_ForUsers();
    this.newTypeControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
    // this.typeOfVolunteering_ForUsers.startHour = date.toLocaleTimeString();
    // this.typeOfVolunteering_ForUsers.endHour = date.toLocaleTimeString();
    console.log(this.typeOfVolunteering_ForUsers);
  }

  ngOnInit(): void {
    this.getsv()
  }

  addNewType() {
    if (this.newTypeControl.valid) {
      let typeOfVolunteering = new TypeOfVolunteering();
      typeOfVolunteering.TypeOfVolunteeringName = this.newTypeControl.value;
      this.typeOfVolunteeringService.addTypeOfVolunteering(typeOfVolunteering)
      .subscribe(newTypeOfVolunteering => {
        this.typesOfVolunteering.push(newTypeOfVolunteering);
        this.openSnackBar('סוג ההתנדבות נוסף בהצלחה');
        this.newTypeControl.reset('');
        this.newTypeControl.markAsPristine();
        this.newTypeControl.markAsUntouched();
        this.isAddNewType = false;
      }, err => console.log(err));
    }
  }

  getsv() {
    this.typeOfVolunteeringService.getAllTypeOfVolunteerings().subscribe(c => {
      (this.typesOfVolunteering) = c;
      console.log(this.typesOfVolunteering)
    });
  }

  addTypeOfVolunteering(event: any) {
    console.log(this.typeOfVolunteering_ForUsers);
    if (this.userId != -1 && event.target.className.includes('ng-valid') && this.typeOfVolunteering_ForUsers.typeOfVolunteeringId != 0
      && this.days.value.length > 0 && this.typeOfVolunteering_ForUsers.startHour != null
      && this.typeOfVolunteering_ForUsers.endHour != null) {
      let obj = new TypeOfVolunteering_ForUsers();
      obj.userId = this.userId;
      obj.typeOfVolunteeringId = this.typeOfVolunteering_ForUsers.typeOfVolunteeringId;
      obj.days = this.getDays(this.days.value);
      obj.startHour = this.typeOfVolunteering_ForUsers.startHour;
      obj.endHour = this.typeOfVolunteering_ForUsers.endHour;
      this.typeOfVolunteeringForUsersService.AddTypeOfVolunteering_ForUser(obj)
        .subscribe(res => {
          if (res) {
            this.openSnackBar('ההתנדבות נוספה בהצלחה!');
            this.router.navigateByUrl(`/mitnadev/${this.userId}`);
          }
          else this.openSnackBar('הוספת ההתנדבות נכשלה');
        }, err => console.log(err));
    }
  }

  setStartHour(e: any) {
    this.typeOfVolunteering_ForUsers.startHour = e.target.value;
  }

  setEndHour(e: any) {
    this.typeOfVolunteering_ForUsers.endHour = e.target.value;
  }

  getDays(list: string[]): string {
    return list.map((day: string) => this.daysList.indexOf(day) + 1).join(',');
  }

  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['custom-snackbar'];
    config.direction = 'rtl';
    this._snackBar.open(message, 'הבנתי', config);
  }
}
