import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmaiComponent } from './input-emai.component';

describe('InputEmaiComponent', () => {
  let component: InputEmaiComponent;
  let fixture: ComponentFixture<InputEmaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputEmaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
