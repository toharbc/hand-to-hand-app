import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsOfSearchingComponent } from './results-of-searching.component';

describe('ResultsOfSearchingComponent', () => {
  let component: ResultsOfSearchingComponent;
  let fixture: ComponentFixture<ResultsOfSearchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsOfSearchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsOfSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
