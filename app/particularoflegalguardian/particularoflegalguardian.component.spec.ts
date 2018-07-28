import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularoflegalguardianComponent } from './particularoflegalguardian.component';

describe('ParticularoflegalguardianComponent', () => {
  let component: ParticularoflegalguardianComponent;
  let fixture: ComponentFixture<ParticularoflegalguardianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticularoflegalguardianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularoflegalguardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
