import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { VolunteeringService } from 'src/app/shared/services/volunteering.service';
import { eStatus } from '../../requester/volunteer-dialog/volunteer-dialog.component';
import { DialogData } from '../my-request/my-request.component';
import { EDays } from '../types-of-volunteering/types-of-volunteering.component';

@Component({
  selector: 'request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent implements OnInit {

  waitingStatus = false;
  status: string = Object.values(eStatus)[0];

  constructor(public dialogRef: MatDialogRef<RequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private volunteeringService: VolunteeringService, 
    private _snackBar: MatSnackBar) {
    this.getStatus(data.volunteering.Status);
    console.log(eStatus.Waiting);
    console.log(data.volunteering.Status);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // פונקציה שממירה אם הסטטוס ממחרוזת למספר כדי שיהיה קל להשוות אותה
  getStatus(status: any) {
    console.log(Object.values(eStatus).indexOf(status) + 1);
    return Object.values(eStatus).indexOf(status) + 1;
  }

  confirm() {
    this.ChangeStatusToVolunteering(Object.values(eStatus).indexOf(eStatus.Confirmed) + 1, 
    'ההתנדבות אושרה בהצלחה, תודה!');
  }

  reject() {
    this.ChangeStatusToVolunteering(Object.values(eStatus).indexOf(eStatus.Rejected) + 1, 
    'ההתנדבות נדחתה בהצלחה');
  }

  done() {
    this.ChangeStatusToVolunteering(Object.values(eStatus).indexOf(eStatus.Done) + 1, 
    'ההתנדבות סומנה כבוצעה בהצלחה');
  }

  // פונקציה שמקבלת סטטוס מעודכן לשינוי והודעה שתוצג למשתמש בהתאם
  ChangeStatusToVolunteering(updatedStatus: number, message: string) {
    this.volunteeringService.ChangeStatusToVolunteering(this.data.volunteering.volunteeringId, 
      updatedStatus)
      .subscribe(res => {
        if (res) {
          this.openSnackBar(message);
          this.data.volunteering.Status = Object.values(eStatus)[updatedStatus - 1];
          this.waitingStatus = false;
          this.onNoClick();
        }
      }, err => console.log(err));
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

  // פונקציה שמקבלת את המחרוזת של הימים בשבוע במספרים וממירה אותם למערך עם ימים באותיות
  convertList(list: string) {
    let arr = list.split(',');
    return arr.map(value => this.convertToDays(Number(value)));
  }

  convertToDays(value: number) {
    return EDays[value];
  }

}
