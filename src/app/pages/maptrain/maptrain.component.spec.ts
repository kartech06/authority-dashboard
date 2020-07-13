import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaptrainComponent } from './maptrain.component';

describe('MaptrainComponent', () => {
  let component: MaptrainComponent;
  let fixture: ComponentFixture<MaptrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaptrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaptrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
