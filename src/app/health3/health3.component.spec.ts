import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Health3Component } from './health3.component';

describe('Health3Component', () => {
  let component: Health3Component;
  let fixture: ComponentFixture<Health3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Health3Component]
    });
    fixture = TestBed.createComponent(Health3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
