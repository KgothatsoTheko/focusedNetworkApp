import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterConfirmationPage } from './register-confirmation.page';

describe('RegisterConfirmationPage', () => {
  let component: RegisterConfirmationPage;
  let fixture: ComponentFixture<RegisterConfirmationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
