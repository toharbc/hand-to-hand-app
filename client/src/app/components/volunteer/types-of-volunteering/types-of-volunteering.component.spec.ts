import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfVolunteeringComponent } from './types-of-volunteering.component';

describe('TypesOfVolunteeringComponent', () => {
  let component: TypesOfVolunteeringComponent;
  let fixture: ComponentFixture<TypesOfVolunteeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesOfVolunteeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesOfVolunteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
