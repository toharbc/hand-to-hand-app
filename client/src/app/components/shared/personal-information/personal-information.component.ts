import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/shared/models/Users.model';
import { RoutingService } from 'src/app/shared/services/routing.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  // previosPassword: string = '';
  // newPassword: string = '';
  // confirmPasswordControl: FormControl;

  updateDetailsForm: FormGroup;

  isFinishUpdating = false;
  success = true;
  user: Users = new Users();
  userId: number = -1;

  constructor(private router: Router, private userService: UsersService,
    private routingService: RoutingService, private activatedRoute: ActivatedRoute,
    private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.updateDetailsForm = this.fb.group({});
    // this.confirmPasswordControl = new FormControl('', [Validators.required]);
    if (this.activatedRoute.snapshot.params.userId != undefined) {
      this.userId = Number(this.activatedRoute.snapshot.params.userId);
      this.getDetailsOfCurrentUser(this.userId);
    }
  }

  ngOnInit(): void {
  }

  // checkValidation(event: any) {
  //   if (event.target.value !== this.user.UserPassword) {
  //     this.confirmPasswordControl.setErrors({ 'NotEqual': true });
  //   }
  //   else {
  //     // אם אימות הסיסמה שווה לסיסמה מוחקת את השגיאה ששמתי קודם
  //     this.confirmPasswordControl.setErrors(null);
  //   }
  // }

  getDetailsOfCurrentUser(userId: number) {
    // מביאה את הפרטים האישיים של המתנדב
    this.userService.getUser(userId).subscribe(user => this.user = user);
  }

  update() {
    if (this.updateDetailsForm.valid) {
      this.userService.updateUser(this.user.UserId ? this.user.UserId : -1, this.user).subscribe(
        res => {
          this.isFinishUpdating = true;
          if (res) {
            this.success = true;
          }
          else {
            this.success = false;
          }
        }, err => { console.error(err); this.success = false;
          this.isFinishUpdating = true; }
      );
    }
  }

  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['custom-snackbar'];
    config.direction = 'rtl';
    this._snackBar.open(message, 'הבנתי', config);
  }

  returning() {
    this.router.navigateByUrl(Boolean(sessionStorage.getItem('isVolunteer')) ? 
      `/mitnadev/${this.userId}` : `/need-help/${this.userId}`);
  }


}


