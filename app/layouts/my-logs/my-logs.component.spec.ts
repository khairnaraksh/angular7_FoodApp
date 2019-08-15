import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLogsComponent } from './my-logs.component';

describe('MyLogsComponent', () => {
  let component: MyLogsComponent;
  let fixture: ComponentFixture<MyLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
