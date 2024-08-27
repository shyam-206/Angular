import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsbscribeComponent } from './unsbscribe.component';

describe('UnsbscribeComponent', () => {
  let component: UnsbscribeComponent;
  let fixture: ComponentFixture<UnsbscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnsbscribeComponent]
    });
    fixture = TestBed.createComponent(UnsbscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
