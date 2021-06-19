import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFastfoodComponent } from './generate-fastfood.component';

describe('GenerateFastfoodComponent', () => {
  let component: GenerateFastfoodComponent;
  let fixture: ComponentFixture<GenerateFastfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateFastfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateFastfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
