import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturningButtonComponent } from './returning-button.component';

describe('ReturningButtonComponent', () => {
  let component: ReturningButtonComponent;
  let fixture: ComponentFixture<ReturningButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturningButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturningButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
