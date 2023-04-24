import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeOfVolunteerDialogComponent } from './edit-type-of-volunteer-dialog.component';

describe('EditTypeOfVolunteerDialogComponent', () => {
  let component: EditTypeOfVolunteerDialogComponent;
  let fixture: ComponentFixture<EditTypeOfVolunteerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeOfVolunteerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeOfVolunteerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
