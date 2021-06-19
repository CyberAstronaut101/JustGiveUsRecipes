import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMealsComponent } from './generate-meals.component';

describe('GenerateMealsComponent', () => {
  let component: GenerateMealsComponent;
  let fixture: ComponentFixture<GenerateMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
