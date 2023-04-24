import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Volunteer } from 'src/app/shared/models/Volunteer';

@Component({
  selector: 'volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  @Input() volunteer: Volunteer = new Volunteer();
  @Output() onSelected = new EventEmitter<Volunteer>();

  constructor() { }

  ngOnInit(): void {
  }

  // מחליף בין סימון כמועדף לביטול ולהפך
  toggleFavorite(event: Event) {
    // מונעת מהלחיצה על הכוכב שיפעיל גם את האירוע של הלחיצה על הכרטיס
    // כדי שיפעיל רק את הפונקציה הזו
    event.stopPropagation();
    this.volunteer.favorited = !this.volunteer.favorited;
  }

  // בלחיצה על הכרטיס של המתנדב
  saveAsSelected() {
    this.onSelected.emit(this.volunteer);
  }

}
