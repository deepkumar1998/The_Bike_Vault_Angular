import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusValueComponent } from './status-value.component';

describe('StatusValueComponent', () => {
  let component: StatusValueComponent;
  let fixture: ComponentFixture<StatusValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusValueComponent]
    });
    fixture = TestBed.createComponent(StatusValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
