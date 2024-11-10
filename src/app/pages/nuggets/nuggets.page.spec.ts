import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuggetsPage } from './nuggets.page';

describe('NuggetsPage', () => {
  let component: NuggetsPage;
  let fixture: ComponentFixture<NuggetsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuggetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
