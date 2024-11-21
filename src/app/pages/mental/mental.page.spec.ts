import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentalPage } from './mental.page';

describe('MentalPage', () => {
  let component: MentalPage;
  let fixture: ComponentFixture<MentalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
