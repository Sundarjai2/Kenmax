import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthinvolementComponent } from './healthinvolement.component';

describe('HealthinvolementComponent', () => {
  let component: HealthinvolementComponent;
  let fixture: ComponentFixture<HealthinvolementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthinvolementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthinvolementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
