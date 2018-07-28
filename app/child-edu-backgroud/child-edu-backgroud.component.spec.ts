import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEduBackgroudComponent } from './child-edu-backgroud.component';

describe('ChildEduBackgroudComponent', () => {
  let component: ChildEduBackgroudComponent;
  let fixture: ComponentFixture<ChildEduBackgroudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEduBackgroudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEduBackgroudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
