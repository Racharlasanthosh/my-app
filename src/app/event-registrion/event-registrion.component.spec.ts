import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistrionComponent } from './event-registrion.component';

describe('EventRegistrionComponent', () => {
  let component: EventRegistrionComponent;
  let fixture: ComponentFixture<EventRegistrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventRegistrionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRegistrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
