import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuggets',
  templateUrl: './nuggets.page.html',
  styleUrls: ['./nuggets.page.scss'],
})
export class NuggetsPage {

  selectedSegment: string = 'first'; // Default segment

  constructor() { }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value; // Update selected segment
  }

}
