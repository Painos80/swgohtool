import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerinfoComponent } from './playerinfo.component';

describe('PlayerinfoComponent', () => {
  let component: PlayerinfoComponent;
  let fixture: ComponentFixture<PlayerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
         
        HttpClientModule

      ], declarations: [ PlayerinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
