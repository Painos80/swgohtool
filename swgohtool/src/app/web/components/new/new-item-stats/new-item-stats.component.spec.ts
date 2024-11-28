import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemStatsComponent } from './new-item-stats.component';

describe('NewItemStatsComponent', () => {
  let component: NewItemStatsComponent;
  let fixture: ComponentFixture<NewItemStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewItemStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
