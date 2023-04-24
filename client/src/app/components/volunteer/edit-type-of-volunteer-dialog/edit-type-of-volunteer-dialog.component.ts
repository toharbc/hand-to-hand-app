import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { GetVolunteeringDetailsOfUser } from 'src/app/shared/models/GetVolunteeringDetailsOfUser';
import { TypeOfVolunteeringForUsersService } from 'src/app/shared/services/type-of-volunteering-for-users.service';
import { DialogData, EDays } from '../types-of-volunteering/types-of-volunteering.component';

@Component({
  selector: 'app-edit-type-of-volunteer-dialog',
  templateUrl: './edit-type-of-volunteer-dialog.component.html',
  styleUrls: ['./edit-type-of-volunteer-dialog.component.css']
})
export class EditTypeOfVolunteerDialogComponent implements OnInit {

  typeOfVolunteer: GetVolunteeringDetailsOfUser;
  days = new FormControl();
  daysList: string[] = [];
  selection: string[] = [];

  constructor(public dialogRef: MatDialogRef<EditTypeOfVolunteerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private typeOfVolunteeringForUsersService: TypeOfVolunteeringForUsersService, 
    private _snackBar: MatSnackBar) {
    this.typeOfVolunteer = data.typeOfVolunteer;

    this.daysList = Object.keys(EDays).filter((item) => {
      return isNaN(Number(item));
    });
    console.log(this.typeOfVolunteer.days);
    console.log(this.typeOfVolunteer);
    this.typeOfVolunteer.days?.split(',').map((day: any) => this.selection.push(EDays[day]));
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  update() {
    if (this.typeOfVolunteer != null && this.selection.length > 0) {
      this.typeOfVolunteer.days = this.selection.map(day => Object.keys(EDays).indexOf(day) - 5).join(',');
      this.typeOfVolunteeringForUsersService.UpdateTypeOfVolunteering_ForUser(this.typeOfVolunteer)
      .subscribe(res => {
        this.openSnackBar(res ? 'זמני ההתנדבות עודכנו בהצלחה' : 
      'קרתה תקלה בעדכון זמני ההתנדבות');
      this.onNoClick();
      }, err => console.log(err));
    }
  }

  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['custom-snackbar'];
    config.direction = 'rtl';
    this._snackBar.open(message, 'הבנתי', config);
  }

}
