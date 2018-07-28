import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicqueriesComponent } from './basicqueries.component';

describe('BasicqueriesComponent', () => {
  let component: BasicqueriesComponent;
  let fixture: ComponentFixture<BasicqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
