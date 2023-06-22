import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelsComponent } from './feels.component';

describe('FeelsComponent', () => {
  let component: FeelsComponent;
  let fixture: ComponentFixture<FeelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
