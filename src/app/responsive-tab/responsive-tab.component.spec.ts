import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTabComponent } from './responsive-tab.component';

describe('ResponsiveTabComponent', () => {
  let component: ResponsiveTabComponent;
  let fixture: ComponentFixture<ResponsiveTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveTabComponent]
    });
    fixture = TestBed.createComponent(ResponsiveTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
