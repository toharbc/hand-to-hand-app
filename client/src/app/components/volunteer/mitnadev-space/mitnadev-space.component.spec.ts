import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitnadevSpaceComponent } from './mitnadev-space.component';

describe('MitnadevSpaceComponent', () => {
  let component: MitnadevSpaceComponent;
  let fixture: ComponentFixture<MitnadevSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitnadevSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitnadevSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
