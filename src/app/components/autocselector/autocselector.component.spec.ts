import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocselectorComponent } from './autocselector.component';

describe('AutocselectorComponent', () => {
  let component: AutocselectorComponent;
  let fixture: ComponentFixture<AutocselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocselectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
