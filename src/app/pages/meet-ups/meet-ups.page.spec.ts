import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeetUpsPage } from './meet-ups.page';

describe('MeetUpsPage', () => {
  let component: MeetUpsPage;
  let fixture: ComponentFixture<MeetUpsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetUpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
