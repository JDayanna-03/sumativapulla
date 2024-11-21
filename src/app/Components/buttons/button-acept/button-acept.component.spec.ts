import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAceptComponent } from './button-acept.component';

describe('ButtonAceptComponent', () => {
  let component: ButtonAceptComponent;
  let fixture: ComponentFixture<ButtonAceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
