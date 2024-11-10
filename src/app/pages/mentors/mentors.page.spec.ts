import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentorsPage } from './mentors.page';

describe('MentorsPage', () => {
  let component: MentorsPage;
  let fixture: ComponentFixture<MentorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
