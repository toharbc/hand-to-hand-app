import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RoutingService } from '../../../shared/services/routing.service';
import { ETypeUser, UsersService } from '../../../shared/services/users.service';
import { QuestionDialogComponent } from '../../volunteer/question-dialog/question-dialog.component';

export class LoginObj {
  email: string;
  password: string;
  constructor(email: string = '', password: string = '') {
    this.email = email;
    this.password = password;
  }
}

export enum EResult { NotExist = 1, Exist, NotSuitable };
export class LoginAnswer {
  result: EResult;
  userId: number;
  constructor(result = EResult.NotExist, userId = -1) {
    this.result = result;
    this.userId = userId;
  }
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj = new LoginObj();
  typeUser: ETypeUser = ETypeUser.Other;
  loginform: FormGroup;

  constructor(private userService: UsersService,
    private routingService: RoutingService,
    private router: Router, private _snackBar: MatSnackBar,
    private fb: FormBuilder, private dialog: MatDialog) {
    this.loginform = this.fb.group({});
  }

  ngOnInit(): void {
  }

  login(event: any) {
    // בודקת אם הטופס תקין
    if (this.loginform.valid) {
      this.userService.login(this.loginObj.email, this.loginObj.password).subscribe(
        user => {

          // אם המשתמש רשום במערכת
          if (user != null && user.UserId) {
            // שומרת את המזהה של המשתמש באחסון של האתר
            sessionStorage.setItem('user', user.UserId.toString());
            this.openSnackBar('התחברת לאפליקציה בהצלחה');
            // מנתבת אותו לדף המתאים לפי אם הוא מתנדב או לא
            if (event.submitter.className.includes('helpRequest')) {
              sessionStorage.setItem('isVolunteer', String(false));
              this.router.navigateByUrl(`/need-help/${user.UserId}`);
            }
            else if (event.submitter.className.includes('volunteer')) {
              sessionStorage.setItem('isVolunteer', String(true));
              this.router.navigateByUrl(`/mitnadev/${user.UserId}`);
            }
          }
          // מציגה למשתמש הודעה אם ההתחברות לא הצליחה
          else {
            this.openSnackBar('ההתחברות למערכת נכשלה');
          }

        }, err => console.log(err));
    }
  }

  // createNewUser() {
  //     const dialogRef = this.dialog.open(QuestionDialogComponent, {
  //       width: '350px',
  //       data: { question: 'משתמש זה אינו ' },
  //     });
  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result) {
  //         this.typeOfVolunteeringForUsersService.DeleteTypeOfVolunteering_ForUser(type.id)
  //         .subscribe(res => {
  //           if (res) {
  //             this.deleteFromLocalList(type.id);
  //             this.openSnackBar('ההתנדבות נמחקה בהצלחה');
  //           }
  //           else this.openSnackBar('קרתה תקלה במחיקת ההתנדבות');
  //         }, err => console.log(err));
  //       }
  //       else this.openSnackBar('המחיקה בוטלה');
  //     });
  // }

  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['custom-snackbar'];
    config.direction = 'rtl';
    this._snackBar.open(message, 'הבנתי', config);
  }
}
