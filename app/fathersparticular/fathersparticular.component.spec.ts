import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FathersparticularComponent } from './fathersparticular.component';

describe('FathersparticularComponent', () => {
  let component: FathersparticularComponent;
  let fixture: ComponentFixture<FathersparticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FathersparticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FathersparticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
