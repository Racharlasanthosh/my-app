import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecoderComponent } from './typecoder.component';

describe('TypecoderComponent', () => {
  let component: TypecoderComponent;
  let fixture: ComponentFixture<TypecoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
