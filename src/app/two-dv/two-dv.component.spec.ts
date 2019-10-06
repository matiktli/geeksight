import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDVComponent } from './two-dv.component';

describe('TwoDVComponent', () => {
  let component: TwoDVComponent;
  let fixture: ComponentFixture<TwoDVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
