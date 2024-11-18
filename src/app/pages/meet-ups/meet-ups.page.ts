import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-meet-ups',
  templateUrl: './meet-ups.page.html',
  styleUrls: ['./meet-ups.page.scss'],
})
export class MeetUpsPage implements OnInit {

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.api.genericGet('events').subscribe(
        (res)=> {
          this.events = res
          console.log("All events", this.events);
        },
        (error) => {
          console.log("Something went wrong...", error);
          
        }
      )
      event.target.complete();
    }, 2000);
  }

  events!:any

  constructor(private storage: Storage, private api: ApiService) { }

  async ngOnInit() {
    this.api.genericGet('events').subscribe(
      (res)=> {
        this.events = res
        console.log("All events", this.events);
      },
      (error) => {
        console.log("Something went wrong...", error);
        
      }
    )
}
}
