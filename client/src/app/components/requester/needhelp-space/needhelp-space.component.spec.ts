import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedhelpSpaceComponent } from './needhelp-space.component';

describe('NeedhelpSpaceComponent', () => {
  let component: NeedhelpSpaceComponent;
  let fixture: ComponentFixture<NeedhelpSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedhelpSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedhelpSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
