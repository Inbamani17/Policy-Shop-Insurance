import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIns2Component } from './home-ins2.component';

describe('HomeIns2Component', () => {
  let component: HomeIns2Component;
  let fixture: ComponentFixture<HomeIns2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIns2Component]
    });
    fixture = TestBed.createComponent(HomeIns2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
