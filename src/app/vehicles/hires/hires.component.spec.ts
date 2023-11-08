import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiresComponent } from './hires.component';

describe('HiresComponent', () => {
  let component: HiresComponent;
  let fixture: ComponentFixture<HiresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiresComponent]
    });
    fixture = TestBed.createComponent(HiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
