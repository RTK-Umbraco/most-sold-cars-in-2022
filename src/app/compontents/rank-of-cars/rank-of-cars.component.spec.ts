import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankOfCarsComponent } from './rank-of-cars.component';

describe('RankOfCarsComponent', () => {
  let component: RankOfCarsComponent;
  let fixture: ComponentFixture<RankOfCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankOfCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankOfCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
