import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Car3Component } from './car3.component';

describe('Car3Component', () => {
  let component: Car3Component;
  let fixture: ComponentFixture<Car3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Car3Component]
    });
    fixture = TestBed.createComponent(Car3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
