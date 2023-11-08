import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesDataComponent } from './vehicles-data.component';

describe('VehiclesDataComponent', () => {
  let component: VehiclesDataComponent;
  let fixture: ComponentFixture<VehiclesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesDataComponent]
    });
    fixture = TestBed.createComponent(VehiclesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
