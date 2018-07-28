import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildeducationbackgroundComponent } from './childeducationbackground.component';

describe('ChildeducationbackgroundComponent', () => {
  let component: ChildeducationbackgroundComponent;
  let fixture: ComponentFixture<ChildeducationbackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildeducationbackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildeducationbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
