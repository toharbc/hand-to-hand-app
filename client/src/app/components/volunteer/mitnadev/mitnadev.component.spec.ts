import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitnadevComponent } from './mitnadev.component';

describe('MitnadevComponent', () => {
  let component: MitnadevComponent;
  let fixture: ComponentFixture<MitnadevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitnadevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitnadevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
