import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpRequestsService } from '../../../shared/services/help-requests.service';

@Component({
  selector: 'needhelp-space',
  templateUrl: './needhelp-space.component.html',
  styleUrls: ['./needhelp-space.component.css']
})
export class NeedhelpSpaceComponent implements OnInit {

  constructor(private router:Router,
    private helpRequestsService: HelpRequestsService) { }

  ngOnInit(): void {
  }
//עדכון פרטים אישיים  
update(){
  {this.router.navigate(['/personal-information'])}
  }
  //התנתק מהאתר
  go(){
 // this.helpRequestsService.delete(this.id).subscribe(d=>{
    
  
    // } )
     this.router.navigate(['/go'])
    }
  //צפייה במערכת השעות
   // show(){
     // this.router.navigate(['/app-shown'])
  //}
  
  //הוסף בקשת עזרה
  add(){
    this.router.navigate(['/new-help-request'])
  }
  //מחק  התנדבות
  //up(){
    //this.router.navigate(['/app-update-ncv'])
    
  //}

}
