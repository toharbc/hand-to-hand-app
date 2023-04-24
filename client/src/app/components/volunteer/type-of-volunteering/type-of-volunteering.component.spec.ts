import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfVolunteeringComponent } from './type-of-volunteering.component';

describe('TypeOfVolunteeringComponent', () => {
  let component: TypeOfVolunteeringComponent;
  let fixture: ComponentFixture<TypeOfVolunteeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOfVolunteeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfVolunteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
