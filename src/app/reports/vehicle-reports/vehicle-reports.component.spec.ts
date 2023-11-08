import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleReportsComponent } from './vehicle-reports.component';

describe('VehicleReportsComponent', () => {
  let component: VehicleReportsComponent;
  let fixture: ComponentFixture<VehicleReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleReportsComponent]
    });
    fixture = TestBed.createComponent(VehicleReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
