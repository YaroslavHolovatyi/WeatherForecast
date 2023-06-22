import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachedInfoComponent } from './cached-info.component';

describe('CachedInfoComponent', () => {
  let component: CachedInfoComponent;
  let fixture: ComponentFixture<CachedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CachedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
