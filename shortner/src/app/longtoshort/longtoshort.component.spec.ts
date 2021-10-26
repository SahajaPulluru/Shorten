import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongtoshortComponent } from './longtoshort.component';

describe('LongtoshortComponent', () => {
  let component: LongtoshortComponent;
  let fixture: ComponentFixture<LongtoshortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongtoshortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongtoshortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
