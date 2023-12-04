import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIns1Component } from './home-ins1.component';

describe('HomeIns1Component', () => {
  let component: HomeIns1Component;
  let fixture: ComponentFixture<HomeIns1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIns1Component]
    });
    fixture = TestBed.createComponent(HomeIns1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
