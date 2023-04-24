import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerToRequestsComponent } from './answer-to-requests.component';

describe('AnswerToRequestsComponent', () => {
  let component: AnswerToRequestsComponent;
  let fixture: ComponentFixture<AnswerToRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerToRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerToRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
