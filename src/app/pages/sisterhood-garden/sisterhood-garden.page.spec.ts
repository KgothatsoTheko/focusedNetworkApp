import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisterhoodGardenPage } from './sisterhood-garden.page';

describe('SisterhoodGardenPage', () => {
  let component: SisterhoodGardenPage;
  let fixture: ComponentFixture<SisterhoodGardenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SisterhoodGardenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
