import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHelpRequestComponent } from './new-help-request.component';

describe('NewHelpRequestComponent', () => {
  let component: NewHelpRequestComponent;
  let fixture: ComponentFixture<NewHelpRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHelpRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHelpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
