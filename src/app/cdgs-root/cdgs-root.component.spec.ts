import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdgsRootComponent } from './cdgs-root.component';

describe('CdgsRootComponent', () => {
  let component: CdgsRootComponent;
  let fixture: ComponentFixture<CdgsRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdgsRootComponent]
    });
    fixture = TestBed.createComponent(CdgsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
