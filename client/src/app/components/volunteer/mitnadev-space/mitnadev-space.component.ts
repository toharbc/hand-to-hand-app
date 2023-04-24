import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mitnadev-space',
  templateUrl: './mitnadev-space.component.html',
  styleUrls: ['./mitnadev-space.component.css']
})
export class MitnadevSpaceComponent implements OnInit {

  constructor(  private router:Router) { }

  ngOnInit(): void {
  }
//צפייה במערכת השעות
 // ghow(){
   // this.router.navigate(['/app-showms'])
// }

//התנתק מהאתר
   go(){
      console.log("deletemitnade")
     this.router.navigate(['/go'])
   }
   //עדכון פרטים
 update(){
    this.router.navigate(['/personal-information'])
 }

//insert()
//{
  //  this.mitnadevService.insertmitnadev(this.mitnadev).subscribe(m=>{

//} )  }

//הוסף התנדבות
 add(){
      
 this.router.navigate(['/volunteer-detailes'])
}
     //מחק  התנדבות
     //up(){
      // this.router.navigate(['/app-update-ncv'])
       
    // }
    

}
