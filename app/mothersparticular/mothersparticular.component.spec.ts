import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MothersparticularComponent } from './mothersparticular.component';

describe('MothersparticularComponent', () => {
  let component: MothersparticularComponent;
  let fixture: ComponentFixture<MothersparticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MothersparticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MothersparticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
