import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDetailesComponent } from './volunteer-detailes.component';

describe('VolunteerDetailesComponent', () => {
  let component: VolunteerDetailesComponent;
  let fixture: ComponentFixture<VolunteerDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
