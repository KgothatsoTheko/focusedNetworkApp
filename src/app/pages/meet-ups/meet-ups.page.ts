import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-meet-ups',
  templateUrl: './meet-ups.page.html',
  styleUrls: ['./meet-ups.page.scss'],
})
export class MeetUpsPage {

  constructor(private api: ApiService) { }

  
}
