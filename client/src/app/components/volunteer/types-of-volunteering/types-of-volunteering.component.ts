import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { GetVolunteeringDetailsOfUser } from 'src/app/shared/models/GetVolunteeringDetailsOfUser';
import { TypeOfVolunteering } from 'src/app/shared/models/TypeOfVolunteering.model';
import { TypeOfVolunteeringForUsersService } from 'src/app/shared/services/type-of-volunteering-for-users.service';
import { EditTypeOfVolunteerDialogComponent } from '../edit-type-of-volunteer-dialog/edit-type-of-volunteer-dialog.component';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';

export interface DialogData {
  typeOfVolunteer: GetVolunteeringDetailsOfUser;
}

export interface DialogQuestionData {
  question: string;
}

export enum EDays { 'א' = 1, 'ב', 'ג', 'ד', 'ה', 'ו' };

@Component({
  selector: 'types-of-volunteering',
  templateUrl: './types-of-volunteering.component.html',
  styleUrls: ['./types-of-volunteering.component.css']
})
export class TypesOfVolunteeringComponent implements OnInit {

  @Input() data: GetVolunteeringDetailsOfUser[] = [];

  displayedColumns: string[] = ['typeOfVolunteeringName', 'days', 'hours', 'options'];
  dataSource: any;

  types: TypeOfVolunteering[] = [];

  constructor(private dialog: MatDialog, 
    private typeOfVolunteeringForUsersService: TypeOfVolunteeringForUsersService, 
    private _snackBar: MatSnackBar) {  }

  ngOnInit(): void {
    this.dataSource = this.data;
  }

  ngOnChanges(): void {
    this.dataSource = this.data;
    console.log(this.data);
    console.log(this.dataSource);
  }

  openEditDialog(type: any): void {
    this.dialog.open(EditTypeOfVolunteerDialogComponent, {
      width: '350px',
      data: { typeOfVolunteer: type as GetVolunteeringDetailsOfUser },
    });
  }

  getAsDate(hour: string) {
    let date = new Date("1/1/20 " + hour);
    return date.getTime();
  }

  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['custom-snackbar'];
    config.direction = 'rtl';
    this._snackBar.open(message, 'הבנתי', config);
  }

  delete(type: GetVolunteeringDetailsOfUser): void {
    // פותחת דיאלוג של ספריית מטריאל
    // שבה אשאל את המשתמש אם הוא בטוח שהוא רוצה למחוק
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      // מגדירה גודל לדיאלוג שייפתח
      width: '350px',
      // שולחת לו את השאלה שאני רוצה להציג בדיאלוג
      data: { question: 'ההתנדבות תמחק לצמיתות. רוצה להמשיך?' },
    });
    // אחרי שהדיאלוג ייסגר
    // התוצאה שהדיאלוג יחזיר לי יגיע לכאן
    dialogRef.afterClosed().subscribe(result => {
      // אם המשתמש בחר שהוא רוצה להמשיך
      if (result) {
        this.typeOfVolunteeringForUsersService.DeleteTypeOfVolunteering_ForUser(type.id)
        .subscribe(res => {
          if (res) {
            // אם הפונקציה מהסרבר הצליחה למחוק
            // מוחקת גם מהרשימה שאצלי בקומפוננטה
            this.deleteFromLocalList(type.id);
            // מציגה הודעה למשתמש
            this.openSnackBar('ההתנדבות נמחקה בהצלחה');
          }
          else this.openSnackBar('קרתה תקלה במחיקת ההתנדבות');
        }, err => console.log(err));
      }
      // אם המשתמש מבטל
      else this.openSnackBar('המחיקה בוטלה');
    });
  }

  // מוחקת את ההתנדבות מהמערך שנמצא לי בקומפוננטה עצמה
  // כדי לעדכן אותה שנמחק התנדבות במסד נתונים
  deleteFromLocalList(id: number) {
    // מוצאת את המיקום של ההתנדבות במערך לפי המזהה
    let index = this.data.findIndex(item => item.id == id);
    // בודקת אם הוא מצא את ההתנדבות הזו ואם היא קיימת במערך
    if (index > -1) {
      // מוחקת מהמיקום שמצאתי פריט אחד
      this.data.splice(index, 1);
      this.dataSource = [...this.data];
    }
  }

  convertList(list: string) {
    let arr = list.split(',');
    return arr.map(value => this.convertToDays(Number(value)));
  }

  convertToDays(value: number) {
    return EDays[value];
  }

}
