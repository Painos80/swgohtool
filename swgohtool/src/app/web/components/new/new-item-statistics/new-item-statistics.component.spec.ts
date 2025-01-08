import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemStatisticsComponent } from './new-item-statistics.component';

describe('NewItemStatisticsComponent', () => {
  let component: NewItemStatisticsComponent;
  let fixture: ComponentFixture<NewItemStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewItemStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
