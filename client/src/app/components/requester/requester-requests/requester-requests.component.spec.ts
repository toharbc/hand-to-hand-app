import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterRequestsComponent } from './requester-requests.component';

describe('RequesterRequestsComponent', () => {
  let component: RequesterRequestsComponent;
  let fixture: ComponentFixture<RequesterRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesterRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
