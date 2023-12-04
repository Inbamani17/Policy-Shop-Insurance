import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInsComponent } from './home-ins.component';

describe('HomeInsComponent', () => {
  let component: HomeInsComponent;
  let fixture: ComponentFixture<HomeInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeInsComponent]
    });
    fixture = TestBed.createComponent(HomeInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
