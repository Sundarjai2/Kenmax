import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAlliedHealthProfInvolComponent } from './medical-allied-health-prof-invol.component';

describe('MedicalAlliedHealthProfInvolComponent', () => {
  let component: MedicalAlliedHealthProfInvolComponent;
  let fixture: ComponentFixture<MedicalAlliedHealthProfInvolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalAlliedHealthProfInvolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAlliedHealthProfInvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
