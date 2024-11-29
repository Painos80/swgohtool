import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionExampleComponent } from './projection-example.component';

describe('ProjectionExampleComponent', () => {
  let component: ProjectionExampleComponent;
  let fixture: ComponentFixture<ProjectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectionExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
