import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDaytimeComponent } from './main-daytime.component';

describe('MainDaytimeComponent', () => {
  let component: MainDaytimeComponent;
  let fixture: ComponentFixture<MainDaytimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDaytimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDaytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
