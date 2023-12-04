import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIns3Component } from './home-ins3.component';

describe('HomeIns3Component', () => {
  let component: HomeIns3Component;
  let fixture: ComponentFixture<HomeIns3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIns3Component]
    });
    fixture = TestBed.createComponent(HomeIns3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
