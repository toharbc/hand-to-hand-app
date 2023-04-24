import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingReadonlyComponent } from './rating-readonly.component';

describe('RatingReadonlyComponent', () => {
  let component: RatingReadonlyComponent;
  let fixture: ComponentFixture<RatingReadonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingReadonlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
