import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { GetVolunteeringsByRequester } from 'src/app/shared/models/GetVolunteeringsByRequester';
import { Users } from 'src/app/shared/models/Users.model';
import { VolunteerService } from 'src/app/shared/services/volunteer.service';
import { VolunteeringService } from 'src/app/shared/services/volunteering.service';
import { RequestDialogComponent } from '../../volunteer/request-dialog/request-dialog.component';
import { EDays } from '../../volunteer/types-of-volunteering/types-of-volunteering.component';
import { DialogVolunteerData } from '../requester-requests/requester-requests.component';

export enum eStatus { Waiting = 'ממתין לאישור', Confirmed = 'אושר', Rejected = 'נדחה', Done = 'בוצע' };

@Component({
  selector: 'app-volunteer-dialog',
  templateUrl: './volunteer-dialog.component.html',
  styleUrls: ['./volunteer-dialog.component.css']
})
export class VolunteerDialogComponent implements OnInit {

  request: GetVolunteeringsByRequester;
  rating = 0;
  hasRating = false;
  hasComment = false;
  comment = '';
  isPossible: boolean = false;
  user: Users = new Users();
  isShow = true;

  constructor(public dialogRef: MatDialogRef<VolunteerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogVolunteerData, 
    private volunteeringService: VolunteeringService, 
    private _snackBar: MatSnackBar, private volunteerService: VolunteerService) {
    this.request = data.request;
    this.hasRating = this.request.Rating != null && this.request.Rating > 0;
    this.hasComment = this.request.Comment != null && this.request.Comment.length > 0;
    this.isPossibleShowDetailsOfVolunteer(this.request.Status);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  convertList(list: string) {
    let arr = list.split(',');
    return arr.map(value => this.convertToDays(Number(value)));
  }

  convertToDays(value: number) {
    return EDays[value];
  }

  isDone(status: any) {
    return eStatus.Done === status;
  }

  isPossibleShowDetailsOfVolunteer(status: any) {
    this.isPossible = (eStatus.Done === status || eStatus.Confirmed === status);
    if (this.isPossible) {
      this.volunteerService.GetDetailsOfVolunteer(this.request.VolunteerId)
      .subscribe(user => this.user = user, err => console.log(err));
    }
  }

  updateRating(currentRate: number) {
    this.rating = currentRate;
  }

  saveRating() {
    if (this.rating != null && this.rating > 0) {
      this.volunteeringService.SaveRatingToVolunteering(this.request.VolunteeringId, this.rating)
      .subscribe(res => {
        if (res) {
          this.openSnackBar('הדירוג עודכן ונשמר בהצלחה');
          this.request.Rating = this.rating;
          this.hasRating = true;
        }
        else this.openSnackBar('קרתה תקלה בעדכון הדירוג');
      }, err => console.log(err));
    }
  }

  sendMessage() {
    if (this.comment != null && this.comment != '' && this.comment.length > 0) {
      this.volunteeringService.SendCommentToVolunteering(this.request.VolunteeringId, this.comment)
      .subscribe(res => {
        if (res) {
          this.openSnackBar('התגובה נשמרה בהצלחה');
          this.request.Comment = this.comment;
          this.hasComment = true;
        }
        else this.openSnackBar('קרתה תקלה בשמירת התגובה');
      }, err => console.log(err));
    }
  }

  // הפונקציה שמציגה הודעה
  // כוללת כפתור - הבנתי
  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['custom-snackbar'];
    config.direction = 'rtl';
    this._snackBar.open(message, 'הבנתי', config);
  }

}
