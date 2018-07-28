import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdMedicalRegistrationComponent } from './std-medical-registration.component';

describe('StdMedicalRegistrationComponent', () => {
  let component: StdMedicalRegistrationComponent;
  let fixture: ComponentFixture<StdMedicalRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdMedicalRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdMedicalRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
