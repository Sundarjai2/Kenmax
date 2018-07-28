import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicQueriesComponent } from './basic-queries.component';

describe('BasicQueriesComponent', () => {
  let component: BasicQueriesComponent;
  let fixture: ComponentFixture<BasicQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
