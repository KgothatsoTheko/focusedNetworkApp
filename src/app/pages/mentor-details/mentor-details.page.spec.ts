import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentorDetailsPage } from './mentor-details.page';

describe('MentorDetailsPage', () => {
  let component: MentorDetailsPage;
  let fixture: ComponentFixture<MentorDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
