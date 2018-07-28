import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularofsibilingsComponent } from './particularofsibilings.component';

describe('ParticularofsibilingsComponent', () => {
  let component: ParticularofsibilingsComponent;
  let fixture: ComponentFixture<ParticularofsibilingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticularofsibilingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularofsibilingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
