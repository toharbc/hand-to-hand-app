import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeOfVolunteering } from '../../../shared/models/TypeOfVolunteering.model';
import { VolunteeringForUsers } from '../../../shared/models/VolunteeringForUsers.model';
import { TypeOfVolunteeringService } from '../../../shared/services/type-of-volunteering.service';
import { VolunteeringForUsersService } from '../../../shared/services/volunteering-for-users.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  isByType = true;
  isSearch = false;

  volunteeringForUsers: VolunteeringForUsers[] = [];
  tempVolunteeringForUsers: VolunteeringForUsers[] = [];
  nameStr: string = "";
  locationStr: string = "";
  selectedAreaName: any
  selectedVolunteeringType: number = 0;
  volunteeringTypes: TypeOfVolunteering[] = [];

  constructor(private volunteeringForUsersService: VolunteeringForUsersService,
    private typeOfVoluneeringService: TypeOfVolunteeringService,
    private router: Router) {
      let type = new TypeOfVolunteering();
      type.TypeOfVolunteeringId = 1;
      type.TypeOfVolunteeringName = 'מורה פרטית';
      this.volunteeringTypes.push(type);

      let type1 = new TypeOfVolunteering();
      type1.TypeOfVolunteeringId = 2;
      type1.TypeOfVolunteeringName = 'בישול';
      this.volunteeringTypes.push(type1);

      let type2 = new TypeOfVolunteering();
      type2.TypeOfVolunteeringId = 3;
      type2.TypeOfVolunteeringName = 'תיקון אינסטלציה';
      this.volunteeringTypes.push(type2);
  }

  ngOnInit(): void {
    // this.volunteeringForUsersService.getAllVolunteeringForUsers().subscribe(
    //   res => {
    //     this.volunteeringForUsers = res;
    //     this.tempVolunteeringForUsers = this.volunteeringForUsers;
    //   }

    // )
    // this.typeOfVoluneeringService.getAllTypeOfVolunteerings().subscribe(
    //   res => this.volunteeringTypes = res
    // )
  }

  changeLocation(str: string) {
    this.locationStr = str;
    this.sort();
  }

  changeName(str: string) {
    this.nameStr = str;
    this.sort();
  }

  changeVolunteeringType(typeId: number) {
    this.selectedVolunteeringType = typeId;
    this.sort();
  }
  changeArea(AreaName: string) {
    this.selectedAreaName = AreaName;
    this.sort();
  }

  sort() {

    this.volunteeringForUsers = [];
    for (let v of this.tempVolunteeringForUsers) {
      if (v.UserName?.indexOf(this.nameStr) != -1
        && (this.selectedAreaName == 0 || this.selectedAreaName == v.AreaName)
        //&&v.UserLocation?.indexOf(this.locationStr)!=-1
        && (this.selectedVolunteeringType == 0 || this.selectedVolunteeringType == v.TypeOfVolunteerId))

        this.volunteeringForUsers.push(v);
    }
  }

  showProfile(id: number) {
    this.router.navigate(['/profile', id])
  }


}
