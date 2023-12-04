import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Health1Component } from './health1.component';

describe('Health1Component', () => {
  let component: Health1Component;
  let fixture: ComponentFixture<Health1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Health1Component]
    });
    fixture = TestBed.createComponent(Health1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
