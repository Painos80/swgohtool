import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModscoreComponent } from './modscore.component';

describe('ModscoreComponent', () => {
  let component: ModscoreComponent;
  let fixture: ComponentFixture<ModscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModscoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
