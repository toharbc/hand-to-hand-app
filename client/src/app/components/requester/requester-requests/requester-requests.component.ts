import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GetVolunteeringsByRequester } from 'src/app/shared/models/GetVolunteeringsByRequester';
import { HelpRequests } from '../../../shared/models/HelpRequests.model';
import { HelpRequestsService } from '../../../shared/services/help-requests.service';
import { RequestDialogComponent } from '../../volunteer/request-dialog/request-dialog.component';
import { VolunteerDialogComponent } from '../volunteer-dialog/volunteer-dialog.component';

// export interface RequestElement {
//   username: string;
//   type: string;
//   status: string;
// }

// const ELEMENT_DATA: RequestElement[] = [
//   {username: 'שמעון לוי', type: 'מורה פרטי', status: 'בוצע'},
//   {username: 'שלמה שמואלי', type: 'מורה פרטי', status: 'מחכה לאישור'}
// ];
export interface DialogVolunteerData {
  request: GetVolunteeringsByRequester;
}

@Component({
  selector: 'requester-requests',
  templateUrl: './requester-requests.component.html',
  styleUrls: ['./requester-requests.component.css']
})
export class RequesterRequestsComponent implements OnInit {

  @Input() requests: GetVolunteeringsByRequester[] = [];

  displayedColumns: string[] = ['username', 'type', 'status', 'open'];
  dataSource: any[] = [];

  helpRequests: HelpRequests[] = [];
  constructor(private helpRequestService: HelpRequestsService,
    private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.helpRequestService.getHelpRequestsByRequesterId(0).subscribe(
    //   res=>this.helpRequests=res
    // );
  }

  // פןנקציה מובנית כמו 
  // ngOnInit, constructor
  // לכן אנחנו לא צריכות לקרוא לה
  // היא מופעלת לבד כל פעם שהאינפוט משתנה
  // @input()
  ngOnChanges(): void {
    // ממלאה את הטבלה במערך של הבקשות
    this.dataSource = this.requests;
  }

  openDialog(request: GetVolunteeringsByRequester): void {
    const dialogRef = this.dialog.open(VolunteerDialogComponent, {
      width: '350px', 
      data: { request }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
