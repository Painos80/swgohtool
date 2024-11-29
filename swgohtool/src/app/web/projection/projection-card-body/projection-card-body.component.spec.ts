import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionCardBodyComponent } from './projection-card-body.component';

describe('ProjectionCardBodyComponent', () => {
  let component: ProjectionCardBodyComponent;
  let fixture: ComponentFixture<ProjectionCardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectionCardBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectionCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
