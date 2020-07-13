import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraindbComponent } from './traindb.component';

describe('TraindbComponent', () => {
  let component: TraindbComponent;
  let fixture: ComponentFixture<TraindbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraindbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraindbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
