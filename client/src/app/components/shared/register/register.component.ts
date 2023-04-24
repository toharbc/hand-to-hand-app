import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoutingService } from '../../../shared/services/routing.service';
import { ETypeUser, UsersService } from '../../../shared/services/users.service';
import { Users } from '../../../shared/models/Users.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmPassword: string = '';
  user: Users = new Users();
  typeUser: string = ETypeUser[ETypeUser.Other];

  registerform: FormGroup;
  confirmPasswordControl: FormControl;

  constructor(private userService: UsersService,
    private router: Router, private fb: FormBuilder, private _snackBar: MatSnackBar
  ) {
    this.registerform = this.fb.group({});
    this.confirmPasswordControl = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }

  // פונקציה שמופעלת בכל פעם שמשתנה הערך שב'אימות סיסמה' כדי
  // לבדוק האם הערך שהוזן שווה לסיסמה
  // ואם לא הפונקציה תגדיר לשה של האימות סיסמה - שגיאה
  // אם השגיאה הזו תופיע תוצג הודעת שגיאה למשתמש מתאימה
  checkValidation(event: any) {
    if (event.target.value !== this.user.UserPassword) {
      this.confirmPasswordControl.setErrors({ 'NotEqual': true });
    }
    else {
      // אם אימות הסיסמה שווה לסיסמה מוחקת את השגיאה ששמתי קודם
      this.confirmPasswordControl.setErrors(null);
    }
  }

  // הפונקציה קורית כל פעם שהמשתמש משנה את הבחירה שלו 
  // של הכינס כמתנדב או היכנס כמבקש עזרה
  // כדי לשמור את מה שהוא בחר בתוך משתנה
  // שנדע איזה סוג המשתמש הזה
  radioChange(event: any) {
    this.typeUser = event.value;
  }

  // הרשמה - קורית בלחיצה על כפתור סבמיט
  register() {
    // בודקת אם הטופס תקין
    // שזה אומר שאם יש שדה חובה לדוגמא, אז השדה מלא
    // וגם אם האימות סיסמה תקין
    // הוא בודק אם זה תקין לפי אם יש את השגיאה שהוספנו או לא
    if (this.registerform.valid && this.confirmPasswordControl.valid) {
      // קוראת לפונקציה מהסרביס שמוסיפה משתמש
      this.userService.addUser(this.user).subscribe(
        userId => {
          // מציגה הודעה למשתמש בהתאם לאם המערכת הצליחה להוסיף אותו או לא
          this.openSnackBar(userId != -1 ? 'נרשמת למערכת בהצלחה' : 'קרתה תקלה בהרשמה');
          // מנתבת את המשתמש לדף המאים (איזור אישי של מתנדב/מבקש עזרה)
          // בהתאם למה שהמשתמש בחר (היכנס כ..)
          sessionStorage.setItem('isVolunteer', String(this.typeUser == 'Volunteer'));
          this.router.navigateByUrl(this.typeUser == 'Volunteer' ? `/mitnadev/${userId}` : `/need-help/${userId}`);
        }, err => console.error(err));
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


  // מעבירה ללוגין אם המשתמש רשום
  login() {
    this.router.navigate(['/login'])
  }
  //לקחת את הפונקציה מרות
  //כאן צריכה להעביר לפי המשתמש אם זה מתנדב להוספת התנדבות ואם מבקש עזרה להוספת בקשת עזרה
  insert() {
    this.router.navigate(['/new-help-request'])
  }

}
