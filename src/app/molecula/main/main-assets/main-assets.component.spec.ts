import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAssetsComponent } from './main-assets.component';

describe('MainAssetsComponent', () => {
  let component: MainAssetsComponent;
  let fixture: ComponentFixture<MainAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
