import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionAccordionComponent } from './projection-accordion.component';

describe('ProjectionAccordionComponent', () => {
  let component: ProjectionAccordionComponent;
  let fixture: ComponentFixture<ProjectionAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectionAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectionAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
