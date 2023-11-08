import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleModelsComponent } from './vehicle-models.component';

describe('VehicleModelsComponent', () => {
  let component: VehicleModelsComponent;
  let fixture: ComponentFixture<VehicleModelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleModelsComponent]
    });
    fixture = TestBed.createComponent(VehicleModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
