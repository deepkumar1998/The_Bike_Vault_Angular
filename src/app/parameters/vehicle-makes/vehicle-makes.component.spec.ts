import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMakesComponent } from './vehicle-makes.component';

describe('VehicleMakesComponent', () => {
  let component: VehicleMakesComponent;
  let fixture: ComponentFixture<VehicleMakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleMakesComponent]
    });
    fixture = TestBed.createComponent(VehicleMakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
