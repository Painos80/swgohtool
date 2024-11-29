import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionCardHeaderComponent } from './projection-card-header.component';

describe('ProjectionCardHeaderComponent', () => {
  let component: ProjectionCardHeaderComponent;
  let fixture: ComponentFixture<ProjectionCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectionCardHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectionCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
